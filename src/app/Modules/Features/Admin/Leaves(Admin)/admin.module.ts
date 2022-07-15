import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
  AdminComponent
  ],
  imports: [
AdminRoutingModule,RouterModule
  
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule {}