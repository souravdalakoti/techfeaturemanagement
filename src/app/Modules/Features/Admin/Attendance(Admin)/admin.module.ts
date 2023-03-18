import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminAttendanceRoutingModule } from './admin-routing.module';
import { AdminAttendanceComponent } from './admin.component';


@NgModule({
  declarations: [
AdminAttendanceComponent
  ],
  imports: [
RouterModule,AdminAttendanceRoutingModule
  
  ],
  providers: [],
  bootstrap: []
})
export class AdminAttendanceModule {}