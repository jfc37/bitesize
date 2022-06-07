import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'course-selection' },
  {
    path: 'course-selection',
    loadChildren: () =>
      import('./course-selection/course-selection.module').then(
        (m) => m.CourseSelectionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
