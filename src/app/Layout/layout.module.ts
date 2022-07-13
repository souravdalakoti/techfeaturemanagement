import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { PipeComponent } from '../Modules/shared/custom-pipes/pipe.component';
import { AuthComponent } from './auth/auth.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { LeftComponent } from './left-slider/left.component';
import { NavComponent } from './navbar/nav.component';


@NgModule({
  declarations: [
  LayoutComponent,NavComponent,LeftComponent,PipeComponent,AuthComponent
],
  
  imports: [
   LayoutRoutingModule,RouterModule,CommonModule
   
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
