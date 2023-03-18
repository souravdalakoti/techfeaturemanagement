import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/Modules/shared/services/auth.service';
import { EmployeeService } from 'src/app/Modules/shared/services/employee.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   EmployeesComponent
  ],
  imports: [
  EmployeesRoutingModule,RouterModule,CommonModule,FormsModule
  
  ],
  providers: [EmployeeService],
  bootstrap: []
})
export class EmployeesModule {}