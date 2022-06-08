import { Component, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { CourseService } from '../services/course.service';
import { CourseSummary } from '../types/courses';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.scss'],
})
export class CourseSelectionComponent implements OnInit {
  public summaries$!: Observable<CourseSummary[]>;
  public loading$!: Observable<boolean>;

  constructor(private courseService: CourseService) {}

  public ngOnInit(): void {
    this.summaries$ = this.courseService.getAllSummaries();

    this.loading$ = this.summaries$.pipe(
      map(() => false),
      startWith(true)
    );
  }
}
