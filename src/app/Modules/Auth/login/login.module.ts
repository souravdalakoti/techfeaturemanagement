import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';




@NgModule({
  imports: [
  LoginRoutingModule,CommonModule,FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
