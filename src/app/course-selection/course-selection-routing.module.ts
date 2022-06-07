import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSelectionComponent } from './course-selection.component';

const routes: Routes = [{ path: '', component: CourseSelectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseSelectionRoutingModule { }
