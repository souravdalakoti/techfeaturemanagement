import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeaveEmployeeRoutingModule } from './leave(employee)-routing.module';
import { LeaveEmployeeComponent } from './leave(employee).component';


@NgModule({
  declarations: [
 LeaveEmployeeComponent
  ],
  imports: [
 RouterModule,LeaveEmployeeRoutingModule
  
  ],
  providers: [],
  bootstrap: []
})
export class LeaveEmployeeModule {}