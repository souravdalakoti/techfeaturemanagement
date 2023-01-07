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
      { path: 'Leaves(Admin)',loadChildren: () => import('./Admin/Leaves(Admin)/admin.module').then(module=>module.AdminModule),data: { title: 'Leave(Admin)' } },
      { path: 'Attendance(Employee)',loadChildren: () => import('./Employees/Attendance(Employee)/attendance.module').then(module=>module.AttendanceModule),data: { title: 'Attendance(Employee)' } },
      { path: 'EmployeeDetail/:id',loadChildren: () => import('./Employees/EmployeeDetail/detail.module').then(module=>module.DetailModule),data: { title: 'EmployeeDetail' } },
      { path: 'Attendance(Admin)',loadChildren: () => import('./Admin/Attendance(Admin)/attendance(admin).module').then(module=>module.AdminAttendanceModule),data: { title: 'Attendance(Admin)' } },
      { path: 'Leaves(Employees)',loadChildren: () => import('./Employees/Leave(Employee)/leave(employee).module').then(module=>module.LeaveEmployeeModule),data: { title: 'Attendance(Admin)' } },
      { path: 'profile',loadChildren: () => import('./profile/profile.module').then(module=>module.ProfileModule),data: { title: 'Attendance(Admin)' } },
      { path: 'TFCoachingclass',loadChildren: () => import('./TFCoachingclass/TFCoachingTrainee.module').then(module=>module.TFCoachingTraineeModule),data: { title: 'TFCoachingclass' } },
      {path:'TFEmployee',loadChildren:()=>import('./TFCoachingclass/TFEmployee/TFEmployee.module').then(module=>module.TFEmployeeModule),data:{title:'TFEmployee'}},
      {path:'TFInvoice',loadChildren:()=>import('./TF-invoice/tfinvoice.module').then(module=>module.TFInvoiceModule),data:{title:'TFInvoice'}},
      
    ]
},

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
