import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import{ RouterModule }from '@angular/router';
import{ TFEmployeeRoutingModule }from './TFEmployee-routing.module';
import{ TFEmployeecomponent } from './TFEmployee.component';
import { FormsModule } from '@angular/forms';
import { TFEmployeeService } from 'src/app/Modules/shared/services/TFEmployee.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  
declarations: [
  TFEmployeecomponent
],
imports: [
  TFEmployeeRoutingModule, RouterModule,FormsModule,CommonModule
   
],
providers: [
  TFEmployeeService
],
bootstrap: []
})
export class TFEmployeeModule { }
