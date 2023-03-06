import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TFEmployeecomponent } from './TFEmployee.component';
import{ EmployeeService }from "src/app/Modules/shared/services/employee.service";



const routes: Routes = [
{path:'',component:TFEmployeecomponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TFEmployeeRoutingModule { }