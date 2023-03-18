import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate {

constructor(private route: Router,private auth : AuthService){}
  
canActivate()
{ 
    if(this.auth.IsloggedIn())
    {
        return true; 
    }
   
      
        return this.route.navigate(['Auth/Login']);
  


   //   if (user) {
    //     // logged in so return true
    //     return true;
    // } else {
    //     // not logged in so redirect to login page with the return url
    //     this.route.navigate(['Auth/Login']);
    //     return false;
    // }
}
    
}