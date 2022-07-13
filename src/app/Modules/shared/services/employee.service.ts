import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';



@Injectable({
  providedIn: 'root'
})

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
}