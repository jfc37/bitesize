import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  collectionData,
  doc,
  docData,
  addDoc,
  updateDoc,
  DocumentData,
} from '@angular/fire/firestore';
import { traceUntilFirst } from '@angular/fire/performance';
import { deleteDoc } from '@firebase/firestore';
import { first, map, Observable, tap } from 'rxjs';
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

  public get(creatorSlug: string, courseSlug: string): Observable<Course> {
    const ref = doc(
      this.firestore,
      `creators/${creatorSlug}/courses/${courseSlug}`
    );
    return docData(ref).pipe(
      tap(console.log.bind(null, 'getCourse')),
      traceUntilFirst('firestore')
    );
  }

  public insertPage(creator: string, course: string, pageNumber: number): void {
    collectionData(
      collection(this.firestore, `creators/${creator}/courses/${course}/pages`),
      { idField: 'slug' }
    )
      .pipe(
        first(),
        map((pages) => pages as Page[]),
        map((pages: Page[]) =>
          pages.filter((page) => page.number >= pageNumber)
        )
      )
      .subscribe((pages) => {
        pages.forEach((page) => {
          const ref = doc(
            this.firestore,
            `creators/${creator}/courses/${course}/pages/${page.slug}`
          );
          updateDoc(ref, { number: page.number + 1 });
        });

        const pagesCollection = collection(
          this.firestore,
          `creators/${creator}/courses/${course}/pages`
        );
        addDoc(pagesCollection, {
          sections: [],
          number: pageNumber,
          name: 'New Page',
          slug: '',
        } as Page);
      });
  }

  public removePage(creator: string, course: string, pageNumber: number): void {
    collectionData(
      collection(this.firestore, `creators/${creator}/courses/${course}/pages`),
      { idField: 'slug' }
    )
      .pipe(
        first(),
        map((pages) => pages as Page[]),
        map((pages: Page[]) =>
          pages.filter((page) => page.number >= pageNumber)
        )
      )
      .subscribe((pages) => {
        console.error('pages', pages);
        pages.forEach((page) => {
          const ref = doc(
            this.firestore,
            `creators/${creator}/courses/${course}/pages/${page.slug}`
          );
          if (page.number != pageNumber) {
            updateDoc(ref, { number: page.number + 1 });
          } else {
            deleteDoc(ref);
          }
        });
      });
  }
}
