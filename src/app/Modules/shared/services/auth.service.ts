import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { Employee } from '../auth/employee';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthService{

   private readonly apiController: string = 'auth';
;

   constructor(  private router: Router,private api: HttpService
    ) {

    }

   Registration(data: any) {
    return this.api.post(this.apiController + "/Registration", data);
}
upload_image(data: any) {
  return this.api.post(this.apiController + "/UploadEmployeeImage", data);
}
Login(id:string,name:string)
{
  return this.api.get(this.apiController + "/Login?emp_id="+id+"&password="+name);
}
IsloggedIn(){
  return !!localStorage.getItem('Logindetail');
}


}