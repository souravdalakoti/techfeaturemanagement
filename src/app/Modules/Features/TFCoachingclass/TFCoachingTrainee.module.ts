 import { CommonModule } from '@angular/common';
 import { NgModule } from '@angular/core';
 import{ RouterModule }from '@angular/router';
import{ TFCoachingTraineeRoutingModule }from './TFCoachingTrainee-routing.module';
import{ TFCoachingTraineeComponent } from './TFCoachingTrainee.component';
import{ TFCoachingclassService}from 'src/app/Modules/shared/services/TFCoachingclass.services';
import { FormsModule } from '@angular/forms';
import { CoachingTraineeFeeDetailComponent } from './CoachingTraineeFeeDetail/CoachingTraineeFeeDetail.component';
    
@NgModule({
   
 declarations: [
 TFCoachingTraineeComponent,CoachingTraineeFeeDetailComponent
],
 imports: [
     TFCoachingTraineeRoutingModule, RouterModule,FormsModule,CommonModule
    
 ],
 providers: [],
bootstrap: []
 })
export class TFCoachingTraineeModule { }