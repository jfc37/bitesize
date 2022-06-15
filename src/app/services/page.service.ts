import { Injectable } from '@angular/core';
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, deleteDoc, getDoc, setDoc } from '@firebase/firestore';
import { from, map, Observable } from 'rxjs';
import { Page } from '../types/courses';
import slugify from 'slugify';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(private firestore: Firestore) {}

  public updateName(
    creator: string,
    course: string,
    page: string,
    name: string
  ): Observable<string> {
    const docPath = [
      'creators',
      creator,
      'courses',
      course,
      'pages',
      page,
    ].join('/');
    const ref = doc(this.firestore, docPath);

    return from(getDoc(ref)).pipe(
      map((snapshot) => {
        const page = snapshot.data() as Page;
        deleteDoc(ref);
        const slugifiedName = slugify(name, { lower: true });
        setDoc(
          doc(
            this.firestore,
            `creators/${creator}/courses/${course}/pages/${slugifiedName}`
          ),
          { ...page, name }
        );

        return slugifiedName;
      })
    );
  }

  public updateSections(
    creator: string,
    course: string,
    page: string,
    sections: string[]
  ): void {
    const docPath = [
      'creators',
      creator,
      'courses',
      course,
      'pages',
      page,
    ].join('/');
    const ref = doc(this.firestore, docPath);
    updateDoc(ref, { sections });
  }
}
