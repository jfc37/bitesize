import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { SharedModule } from '../shared.module';
import { ViewContentComponent } from './components/view-content/view-content.component';
import { EditContentComponent } from './components/edit-content/edit-content.component';

@NgModule({
  declarations: [CourseComponent, ViewContentComponent, EditContentComponent],
  imports: [CommonModule, CourseRoutingModule, SharedModule],
})
export class CourseModule {}
