import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';



@Injectable()

export class EmployeeService{

   private readonly apiController: string = 'Employee';

   constructor(private api: HttpService) { }
 GetEmployeeDetails(){
  
     return this.api.get(this.apiController + "/GetEmployeeDetail");
 }
   GetDepartment() {
     
     return this.api.get(this.apiController + "/GetDepartment");
   }
   GetDesignation() {
      
      return this.api.get(this.apiController + "/GetDesignation");
    }
    GetPosition() {
      
      return this.api.get(this.apiController + "/GetPosition");
    }
    GetEmployeeByDesignation(id:number){

      return this.api.get(this.apiController +"/GetEmployeeByDesignation?designation_id="+id)
    }
    Search_Empname_empid(param:string){

      return this.api.get(this.apiController +"/Search_Empname_empid?param="+param)
    }
    GetEmployeeDetailById(id:number){

      return this.api.get(this.apiController +"/GetEmployeeDetailById?id="+id)
    }
getuserprofile(){

  return this.api.get(this.apiController + "/GetProfileInfo");

}
punchin(data:any)
{
return this.api.post(this.apiController + "/PunchIn", data);
}
punchout(data:any)
{
return this.api.post(this.apiController + "/PunchOut", data);
}
activity(id:number){
  return this.api.get(this.apiController + "/GetEmployeeActivityRecord?id="+id);

}
}

