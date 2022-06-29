import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import {
  combineLatestWith,
  distinctUntilChanged,
  filter,
  first,
  from,
  map,
  Observable,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { CourseService } from '../services/course.service';
import { PageService } from '../services/page.service';
import { Course, Page } from '../types/courses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CourseComponent implements OnInit {
  public course$!: Observable<Course>;
  public isTabletMenuOpen = false;
  public editMode = false;
  public loading$!: Observable<boolean>;
  public pages$!: Observable<Page[]>;
  public page$!: Observable<Page>;
  public canEdit$: Observable<boolean> = authState(this.auth).pipe(
    filter(Boolean),
    tap(console.error.bind(null, '111')),
    switchMap((user) => from(user.getIdTokenResult())),
    tap(console.error.bind(null, '222')),
    map((idToken) => Boolean(idToken.claims['admin'])),
    tap(console.error.bind(null, '333')),
    startWith(false)
  );

  constructor(
    private auth: Auth,
    private courseService: CourseService,
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private readonly authorCourseSlugs$ = this.route.params.pipe(
    map((params) => [params['authorSlug'], params['courseSlug']].join('|')),
    distinctUntilChanged(),
    map((slug) => slug.split('|'))
  );

  private readonly authorCoursePageSlugs$ = this.route.params.pipe(
    map((params) =>
      [params['authorSlug'], params['courseSlug'], params['pageSlug']].join('/')
    ),
    distinctUntilChanged()
  );

  public ngOnInit(): void {
    this.course$ = this.authorCourseSlugs$.pipe(
      switchMap(([creatorSlug, courseSlug]) =>
        this.courseService.get(creatorSlug, courseSlug)
      ),
      shareReplay(1)
    );

    this.pages$ = this.authorCourseSlugs$.pipe(
      switchMap(([creatorSlug, courseSlug]) =>
        this.courseService.getPages(creatorSlug, courseSlug)
      ),
      shareReplay(1)
    );

    this.page$ = this.authorCoursePageSlugs$.pipe(
      switchMap((slug) =>
        this.pages$.pipe(
          map((pages) => pages.find((page) => page.slug === slug)!)
        )
      )
    );

    this.loading$ = this.course$.pipe(
      map(() => false),
      startWith(true)
    );
  }

  public insertNewPage(pageNumber: number): void {
    this.authorCourseSlugs$.subscribe(([creator, course]) =>
      this.courseService.insertPage(creator, course, pageNumber)
    );
  }

  public removePage(pageNumber: number): void {
    this.authorCourseSlugs$
      .pipe(
        first(),
        switchMap(([creator, course]) =>
          this.courseService.removePage(creator, course, pageNumber)
        )
      )
      .subscribe((newPageSlug) => {
        this.router.navigate(['..', newPageSlug], { relativeTo: this.route });
      });
  }

  public titleUpdated(title: string): void {
    this.authorCoursePageSlugs$
      .pipe(
        first(),
        map((slug) => slug.split('/')),
        switchMap(([creator, course, page]) =>
          this.pageService.updateName(creator, course, page, title)
        )
      )
      .subscribe((newPageSlug) => {
        this.router.navigate(['..', newPageSlug], { relativeTo: this.route });
      });
  }

  public sectionUpdated(sections: string[]): void {
    this.authorCoursePageSlugs$
      .pipe(
        first(),
        map((slug) => slug.split('/'))
      )
      .subscribe(([creator, course, page]) =>
        this.pageService.updateSections(creator, course, page, sections)
      );
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  public toggleTabletMenu(): void {
    this.isTabletMenuOpen = !this.isTabletMenuOpen;
  }
}
