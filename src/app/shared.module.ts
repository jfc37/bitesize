import { NgModule } from '@angular/core';
import { SlugToCourseLinkPipe } from './pipes/slug-to-course-link.pipe';
import { MarkdownPipe, SafePipe } from './pipes/markdown.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserNamePipe } from './pipes/user-name.pipe';

@NgModule({
  declarations: [SlugToCourseLinkPipe, MarkdownPipe, SafePipe, UserNamePipe],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [
    SlugToCourseLinkPipe,
    MarkdownPipe,
    SafePipe,
    UserNamePipe,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
