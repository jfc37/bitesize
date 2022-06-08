import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseSelectionRoutingModule } from './course-selection-routing.module';
import { CourseSelectionComponent } from './course-selection.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [CourseSelectionComponent],
  imports: [CommonModule, CourseSelectionRoutingModule, SharedModule],
})
export class CourseSelectionModule {}
