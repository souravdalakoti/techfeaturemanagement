import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [
 DetailComponent
  ],
  imports: [
RouterModule,DetailRoutingModule,CommonModule,FormsModule
  
  ],
  providers: [],
  bootstrap: [DetailComponent]
})
export class DetailModule {}