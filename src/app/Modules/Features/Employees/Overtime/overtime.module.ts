import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDatepicker, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/Modules/shared/services/employee.service';
import { AddOvertimeComponent } from './AddOvertime/add.component';
import { OvertimeRoutingModule } from './overtime-routing.module';
import { OvertimeComponent } from './overtime.component';


@NgModule({
  declarations: [
    OvertimeComponent,AddOvertimeComponent
  ],
  imports: [
 RouterModule,CommonModule,FormsModule,NgbModule,OvertimeRoutingModule
  
  ],
  providers: [EmployeeService],
  bootstrap: [OvertimeComponent]
})
export class OvertimeModule {}