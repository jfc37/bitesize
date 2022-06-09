import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  collectionData,
  doc,
  docData,
} from '@angular/fire/firestore';
import { traceUntilFirst } from '@angular/fire/performance';
import { map, Observable, tap } from 'rxjs';
import { Course, CourseSummary, Page } from '../types/courses';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private firestore: Firestore) {}

  public getAllSummaries(): Observable<CourseSummary[]> {
    return collectionData(collection(this.firestore, 'courses')).pipe(
      tap(console.log.bind(null, 'getAllSummaries')),
      traceUntilFirst('firestore')
    );
  }

  public getPages(creatorSlug: string, courseSlug: string): Observable<Page[]> {
    return collectionData(
      collection(
        this.firestore,
        `creators/${creatorSlug}/courses/${courseSlug}/pages`
      ),
      { idField: 'slug' }
    ).pipe(
      tap(console.log.bind(null, 'getPages')),
      traceUntilFirst('firestore'),
      map((pages: Page[]) =>
        pages.map((page) => ({
          ...page,
          slug: `${creatorSlug}/${courseSlug}/${page.slug}`,
        }))
      )
    );
  }

  public getCourse(
    creatorSlug: string,
    courseSlug: string
  ): Observable<Course> {
    const ref = doc(
      this.firestore,
      `creators/${creatorSlug}/courses/${courseSlug}`
    );
    return docData(ref).pipe(
      tap(console.log.bind(null, 'getCourse')),
      traceUntilFirst('firestore')
    );
  }
}
