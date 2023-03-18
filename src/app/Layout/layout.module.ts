import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { PipeComponent } from '../Modules/shared/custom-pipes/pipe.component';
import { AuthGuard } from '../Modules/shared/auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { LeftComponent } from './left-slider/left.component';
import { NavComponent } from './navbar/nav.component';
import { EmployeeService } from '../Modules/shared/services/employee.service';
import {TFCoachingclassService} from '../Modules/shared/services/TFCoachingclass.services';


@NgModule({
  declarations: [
  LayoutComponent,NavComponent,LeftComponent,PipeComponent,AuthComponent
],
  
  imports: [
   LayoutRoutingModule,RouterModule,CommonModule
   
  ],
  providers: [AuthGuard,EmployeeService,TFCoachingclassService],
  bootstrap: []
})
export class LayoutModule { }
