import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  distinctUntilChanged,
  map,
  Observable,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { CourseService } from '../services/course.service';
import { Course, Page } from '../types/courses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  public course$!: Observable<Course>;
  public isTabletMenuOpen = false;
  public pageFormGroup = new FormGroup({
    name: new FormControl('', { updateOn: 'blur' }),
  });
  public editMode = false;
  public loading$!: Observable<boolean>;
  public pages$!: Observable<Page[]>;
  public page$!: Observable<Page>;
  public nextPage$!: Observable<Page | undefined>;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
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
    this.pageFormGroup.valueChanges.subscribe((value) =>
      this.courseService.updateCourse(value as any)
    );

    this.course$ = this.authorCourseSlugs$.pipe(
      switchMap(([creatorSlug, courseSlug]) =>
        this.courseService.getCourse(creatorSlug, courseSlug)
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
      ),
      tap((page) =>
        this.pageFormGroup.patchValue(
          {
            name: page.name,
          },
          { emitEvent: false }
        )
      )
    );

    this.nextPage$ = this.page$.pipe(
      map((page) => page.number),
      switchMap((currentPageNumber) =>
        this.pages$.pipe(
          map((pages) =>
            pages.find((page) => page.number == currentPageNumber + 1)
          )
        )
      )
    );

    this.loading$ = this.course$.pipe(
      map(() => false),
      startWith(true)
    );
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  public toggleTabletMenu(): void {
    this.isTabletMenuOpen = !this.isTabletMenuOpen;
  }
}
