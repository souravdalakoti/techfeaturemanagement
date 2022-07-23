import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard } from '../shared/auth/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  
  declarations: []
})
export class AuthModule { }
