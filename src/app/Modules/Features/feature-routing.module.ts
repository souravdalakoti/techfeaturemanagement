import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';


const routes: Routes = [
//  {path:'Employees',component:FeatureComponent,loadChildren:()=>import('./Employees/All Employees/employees.module').then(module=>module.EmployeesModule)}

 {
  path: '',
  component: FeatureComponent,
  children: [

     
      { path: 'Employees',loadChildren: () => import('./Employees/All Employees/employees.module').then(module => module.EmployeesModule), data: { title: 'Employees' } },
      { path: 'Holidays',loadChildren: () => import('./Employees/Holidays/holidays.module').then(module => module.HolidaysModule), data: { title: 'Holidays' } },
      { path: 'Leaves(Admin)',loadChildren: () => import('./Employees/Leaves(Admin)/admin.module').then(module=>module.AdminModule),data: { title: 'Leave(Admin)' } },
      { path: 'Attendance(Employee)',loadChildren: () => import('./Employees/Attendance(Employee)/attendance.module').then(module=>module.AttendanceModule),data: { title: 'Attendance(Employee)' } },
      { path: 'EmployeeDetail',loadChildren: () => import('./Employees/EmployeeDetail/detail.module').then(module=>module.DetailModule),data: { title: 'EmployeeDetail' } },
    ]
},

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
