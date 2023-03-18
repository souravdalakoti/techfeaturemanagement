import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachingTraineeFeeDetailComponent } from './CoachingTraineeFeeDetail/CoachingTraineeFeeDetail.component';
import { TFCoachingTraineeComponent } from './TFCoachingTrainee.component';


const routes: Routes = [
{path:'',component:TFCoachingTraineeComponent},
{path:'CoachingTraineeFeeDetail',component:CoachingTraineeFeeDetailComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TFCoachingTraineeRoutingModule { }