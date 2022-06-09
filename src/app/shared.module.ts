import { NgModule } from '@angular/core';
import { SlugToCourseLinkPipe } from './pipes/slug-to-course-link.pipe';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SlugToCourseLinkPipe, MarkdownPipe],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [
    SlugToCourseLinkPipe,
    MarkdownPipe,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
