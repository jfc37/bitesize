import { NgModule } from '@angular/core';
import { SlugToCourseLinkPipe } from './pipes/slug-to-course-link.pipe';
import { MarkdownPipe, SafePipe } from './pipes/markdown.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SlugToCourseLinkPipe, MarkdownPipe, SafePipe],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [
    SlugToCourseLinkPipe,
    MarkdownPipe,
    SafePipe,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
