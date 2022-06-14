import { Injectable } from '@angular/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Page } from '../types/courses';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(private firestore: Firestore) {}

  public update(page: Page): void {
    const [creator, course, pageName] = page.slug.split('/');
    const docPath = [
      'creators',
      creator,
      'courses',
      course,
      'pages',
      pageName,
    ].join('/');
    const ref = doc(this.firestore, docPath);
    updateDoc(ref, { ...page });
  }
}
