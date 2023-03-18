import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';

@NgModule({
  declarations: [
 AttendanceComponent
  ],
  imports: [
AttendanceRoutingModule,RouterModule,CommonModule
  
  ],
  providers: [],
  bootstrap: []
})
export class AttendanceModule {}