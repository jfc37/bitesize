import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseSelectionRoutingModule } from './course-selection-routing.module';
import { CourseSelectionComponent } from './course-selection.component';


@NgModule({
  declarations: [
    CourseSelectionComponent
  ],
  imports: [
    CommonModule,
    CourseSelectionRoutingModule
  ]
})
export class CourseSelectionModule { }
