import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Modules/Auth/registration/register.component';
import { HttpService } from './Modules/shared/services/http.service';

@NgModule({
  declarations: [
    AppComponent,RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,HttpClientModule,FormsModule,NgbModule

  ],
  providers: [HttpClient,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
