import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDatepicker, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/Modules/shared/services/employee.service';
import { AddLeaveComponent } from './Add Leave/add-leave.component';

import { LeaveEmployeeRoutingModule } from './employee-routing.module';
import { LeaveEmployeeComponent } from './employee.component';


@NgModule({
  declarations: [
 LeaveEmployeeComponent,AddLeaveComponent
  ],
  imports: [
 RouterModule,LeaveEmployeeRoutingModule,CommonModule,FormsModule,NgbModule
  
  ],
  providers: [EmployeeService],
  bootstrap: [LeaveEmployeeComponent]
})
export class LeaveEmployeeModule {}