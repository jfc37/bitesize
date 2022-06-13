import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { SharedModule } from '../shared.module';
import { ViewContentComponent } from './components/view-content/view-content.component';
import { EditContentComponent } from './components/edit-content/edit-content.component';
import { NextPageComponent } from './components/next-page/next-page.component';
import { ViewNavigationComponent } from './components/view-navigation/view-navigation.component';
import { EditNavigationComponent } from './components/edit-navigation/edit-navigation.component';

@NgModule({
  declarations: [CourseComponent, ViewContentComponent, EditContentComponent, NextPageComponent, ViewNavigationComponent, EditNavigationComponent],
  imports: [CommonModule, CourseRoutingModule, SharedModule],
})
export class CourseModule {}
