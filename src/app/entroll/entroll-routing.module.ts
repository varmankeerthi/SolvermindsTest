import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';

const routes: Routes = [
  {path:'enrollment',component:EnrollmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrollRoutingModule { }
