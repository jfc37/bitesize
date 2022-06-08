import { NgModule } from '@angular/core';
import { SlugToCourseLinkPipe } from './pipes/slug-to-course-link.pipe';

@NgModule({
  declarations: [SlugToCourseLinkPipe],
  exports: [SlugToCourseLinkPipe],
})
export class SharedModule {}
