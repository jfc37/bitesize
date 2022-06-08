import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';

const routes: Routes = [
  {
    path: ':authorSlug/:courseSlug',
    pathMatch: 'full',
    redirectTo: ':authorSlug/:courseSlug/intro',
  },
  { path: ':authorSlug/:courseSlug/:pageSlug', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
