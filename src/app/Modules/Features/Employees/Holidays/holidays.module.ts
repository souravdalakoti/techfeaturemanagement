import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidaysRoutingModule } from '../Holidays/holidays-routing.module';
import { HolidaysComponent } from '../Holidays/holidays.component';

@NgModule({
  declarations: [
   HolidaysComponent
  ],
  imports: [
 HolidaysRoutingModule,RouterModule
  
  ],
  providers: [],
  bootstrap: []
})
export class HolidaysModule {}