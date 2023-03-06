import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageAdminRoutingModule } from './message-admin-routing.module';
import { MessageAdminComponent } from './message-admin.component';




@NgModule({
  declarations: [
 MessageAdminComponent
  ],
  imports: [
 RouterModule,MessageAdminRoutingModule,CommonModule,FormsModule
  
  ],
  //providers: [EmployeeService],
 // bootstrap: [MessageAdminComponent]
})
export class MessageAdminModule {}