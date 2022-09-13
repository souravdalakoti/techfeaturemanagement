import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

type NewType = Observable<HttpEvent<any>>;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    detail:any;
   
    emp:any=[];
 
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): NewType {
    
    this.detail=localStorage.getItem("Logindetail");
    if(this.detail!=null)
    {
    this.emp=JSON.parse(this.detail);
    }
    if(this.auth.IsloggedIn())
    {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.emp.token}`
      }
    });
}
    return next.handle(request);
  }
}