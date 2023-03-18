import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAttendanceComponent } from './admin.component';





const routes: Routes = [
{path:'',component:AdminAttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAttendanceRoutingModule { }
