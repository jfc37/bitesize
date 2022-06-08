import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';
import {
  CoursePageSummary,
  CourseSummary,
  getDummyCoursePageSummaries,
  getDummyCourseSummaries,
  getDummyPageContent,
  PageContent,
} from '../types/courses';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public getAllSummaries(): Observable<CourseSummary[]> {
    return of(getDummyCourseSummaries()).pipe(shareReplay(1));
  }

  public getCoursePageSummaries(slug: string): Observable<CoursePageSummary[]> {
    return of(getDummyCoursePageSummaries(slug)).pipe(shareReplay(1));
  }

  public getPageContent(slug: string): Observable<PageContent> {
    return of(getDummyPageContent(slug)).pipe(shareReplay(1));
  }
}
