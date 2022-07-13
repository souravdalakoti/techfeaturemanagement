import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';



@Injectable({
  providedIn: 'root'
})

export class AuthService{

   private readonly apiController: string = 'auth';

   constructor(private api: HttpService) { }

   Registration(data: any) {
    return this.api.post(this.apiController + "/Registration", data);
}
upload_image(data: any) {
  return this.api.post(this.apiController + "/UploadEmployeeImage", data);
}
}