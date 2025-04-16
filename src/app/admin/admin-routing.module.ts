import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseBuilderComponent } from './components/course-builder/course-builder.component';

const routes: Routes = [
  {path:'coursebuilder',component:CourseBuilderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
