import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';

@NgModule({
  declarations: [
 AttendanceComponent
  ],
  imports: [
AttendanceRoutingModule,RouterModule
  
  ],
  providers: [],
  bootstrap: []
})
export class AttendanceModule {}