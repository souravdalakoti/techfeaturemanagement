import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   EmployeesComponent
  ],
  imports: [
  EmployeesRoutingModule,RouterModule
  
  ],
  providers: [],
  bootstrap: []
})
export class EmployeesModule {}