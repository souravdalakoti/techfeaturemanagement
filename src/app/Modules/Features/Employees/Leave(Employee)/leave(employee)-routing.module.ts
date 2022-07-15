import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveEmployeeComponent } from './leave(employee).component';





const routes: Routes = [
{path:'',component:LeaveEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveEmployeeRoutingModule { }
