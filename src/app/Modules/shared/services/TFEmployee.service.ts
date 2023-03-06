import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';



@Injectable()

export class TFEmployeeService{

    private readonly apiController: string = 'TFCoachingclass';

    constructor(private api: HttpService) { }

    Getallemployees(){
        return this.api.get(this.apiController + "/Getallemployees");
      }

      AddInsertdata(employ:any){
        return this.api.post(this.apiController+"/AddInsertdata",employ);
      }

      GetEmployeebyId(employeeId:number){
        return this.api.get(this.apiController+"/GetEmployeebyId?EmployeeId="+employeeId)
      }

      Updatedetails(updateEmploy:any){
        return this.api.post(this.apiController+"/Updatedetails",updateEmploy)
      }
      Deldata(employeeId:number){
        return this.api.delete(this.apiController+"/Deldata?EmployeeId="+employeeId)
      }
}