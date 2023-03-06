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
activitylist(data:any){
  debugger
  return this.api.post(this.apiController + "/GetEmployeeActivityRecordList",data);

}
activitylistbydate(model:any){
  return this.api.post(this.apiController + "/GetEmployeeRecordByDate",model);

}
getleavetype(){
  return this.api.get(this.apiController+"/GetLeaveType");
}
SaveEmployeeLeave(data:any)
{
  return this.api.post(this.apiController+"/SaveEmployeeLeave",data);
}
GetemployeeLeaveRecord(data:any){
  return this.api.post(this.apiController+"/GetEmployeeRecordList",data);
}
Getleavedurationrecord(id:number){
  return this.api.get(this.apiController+"/GetTotalLeaveDurationRecord?emp_detail_id="+id);
}
GetRemainingEarnLeave(id:number){
  return this.api.get(this.apiController+"/GetRemainingEarnLeave?id="+id);
}
GetRemainingMedicalLeave(id:number){
  return this.api.get(this.apiController+"/GetRemainingMedicalLeave?id="+id);
}
saveemployeeovertime(insert:any)
{
  return this.api.post(this.apiController+"/SaveEmployeeOvertime",insert);
}
GetEmployeeOvertimeRecord(data:any){
  return this.api.post(this.apiController+"/GetEmployeeOvertimeRecord",data);
}
GetOvertimeActivity(ID:number){
  return this.api.get(this.apiController+"/GetOvertimeActivity?emp_detail_id="+ID);
}
SendMessage(message:any){
  var model={message:message}
  return this.api.post(this.apiController+"/SendMessage",model);
}
}

