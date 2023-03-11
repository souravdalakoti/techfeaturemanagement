import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClientService } from '../../shared/services/client.service';
import { ClientRoutingModule } from './client-rounting.module';
import { ClientComponent } from './client.component';

@NgModule({
  declarations: [
 ClientComponent
  ],
  imports: [
RouterModule,ClientRoutingModule,CommonModule,FormsModule
  
  ],
  providers: [ClientService],
  bootstrap: [ClientComponent]
})
export class ClientModule {}