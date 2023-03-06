import { Injectable, TestabilityRegistry } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';



@Injectable()

export class TFCoachingclassService{

   private readonly apiController: string = 'TFCoachingclass';

   constructor(private api: HttpService) { }
  
   GetCoachingTraineeDetail()
   {
      
    return this.api.get(this.apiController + "/GetCoachingTraineeDetail");
   } 
   AddCoachingTrainee(data: any)
   {
      return this.api.post(this.apiController + "/AddCoachingTrainee",data);
   }
   GetCoachingTraineeById(Id: number)
   {
      return this.api.get(this.apiController + "/GetCoachingTraineeById?trainee_id="+Id);
   }
   GetCoachingTraineeFeeDetail(Id: number)
   {
      return this.api.get(this.apiController + "/GetCoachingTraineeFeeDetail?trainee_id="+Id);
   }
   UpdateCoachingTrainee(data: any)
   {
      return this.api.post(this.apiController + "/UpdateCoachingTrainee",data);
   }
   DeleteCoachingTrainee(trainee_id: number)
   {
      return this.api.delete(this.apiController + "/DeleteCoachingTrainee?trainee_id="+trainee_id);
   }
   SubmitTraineeFee(data:any)
   {
      return this.api.post(this.apiController +"/SubmitTraineeFee",data);
   }
   GetFeeStatus()
   {
      return this.api.get(this.apiController +"/GetFeeStatus");
   }
  
}