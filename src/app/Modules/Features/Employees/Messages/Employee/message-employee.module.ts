import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageAdminRoutingModule } from './message-employee-routing.module';
import { MessageEmployeeComponent } from './message-employee.component';





@NgModule({
  declarations: [
    MessageEmployeeComponent
  ],
  imports: [
 RouterModule,MessageAdminRoutingModule,CommonModule,FormsModule
  
  ],
  //providers: [EmployeeService],
  bootstrap: []
})
export class MessageEmployeeModule {}