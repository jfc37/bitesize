import { NgModule } from '@angular/core';
import { SlugToCourseLinkPipe } from './pipes/slug-to-course-link.pipe';
import { MarkdownPipe } from './pipes/markdown.pipe';

@NgModule({
  declarations: [SlugToCourseLinkPipe, MarkdownPipe],
  exports: [SlugToCourseLinkPipe, MarkdownPipe],
})
export class SharedModule {}
