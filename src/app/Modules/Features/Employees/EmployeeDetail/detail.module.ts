import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [
 DetailComponent
  ],
  imports: [
RouterModule,DetailRoutingModule
  
  ],
  providers: [],
  bootstrap: []
})
export class DetailModule {}