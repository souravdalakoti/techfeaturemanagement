import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Modules/Auth/auth.module';
import { RegisterComponent } from './Modules/Auth/registration/register.component';
import { AuthGuard } from './Modules/shared/auth/auth.guard';
import { AuthInterceptor } from './Modules/shared/auth/auth.interceptor';
import { ErrorInterceptor } from './Modules/shared/auth/error.interceptor';
import { AuthService } from './Modules/shared/services/auth.service';
import { HttpService } from './Modules/shared/services/http.service';

@NgModule({
  declarations: [
    AppComponent,RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,HttpClientModule,FormsModule,NgbModule

  ],
  providers: [
      HttpClient,HttpService,AuthService, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
