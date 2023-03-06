import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeService } from '../shared/services/employee.service';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [
   FeatureComponent
  ],
  imports: [
 FeatureRoutingModule,RouterModule
  
  ],
  providers: [EmployeeService],
  bootstrap: []
})
export class FeatureModule {}