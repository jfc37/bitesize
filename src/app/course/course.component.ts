import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';
import { CourseService } from '../services/course.service';
import { CoursePageSummary, PageContent } from '../types/courses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  public loadingAside$!: Observable<boolean>;
  public loadingContent$!: Observable<boolean>;

  public pageSummaries$!: Observable<CoursePageSummary[]>;
  public page$!: Observable<PageContent>;
  public courseName$!: Observable<string>;
  public isTabletMenuOpen = false;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    console.error('xxx');
    this.pageSummaries$ = this.route.params.pipe(
      map((params) => [params['authorSlug'], params['courseSlug']].join('/')),
      distinctUntilChanged(),
      switchMap((slug) => this.courseService.getCoursePageSummaries(slug))
    );

    this.page$ = this.route.params.pipe(
      map((params) =>
        [params['authorSlug'], params['courseSlug'], params['pageSlug']].join(
          '/'
        )
      ),
      distinctUntilChanged(),
      switchMap((slug) => this.courseService.getPageContent(slug))
    );

    this.courseName$ = this.page$.pipe(
      map((content) => content.courseName),
      startWith('loading...')
    );

    this.loadingAside$ = this.pageSummaries$.pipe(
      map(() => false),
      startWith(true)
    );

    this.loadingContent$ = this.page$.pipe(
      map(() => false),
      startWith(true)
    );
  }

  public toggleTabletMenu(): void {
    this.isTabletMenuOpen = !this.isTabletMenuOpen;
  }
}
