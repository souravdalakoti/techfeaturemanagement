import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../shared/services/employee.service';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';




@NgModule({
  imports: [
 RegisterRoutingModule,CommonModule,FormsModule],
  providers:[EmployeeService],
  declarations: [],
  bootstrap: [RegisterComponent]
})
export class RegisterModule { }
