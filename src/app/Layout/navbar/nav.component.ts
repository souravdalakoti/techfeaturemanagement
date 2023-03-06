import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeService } from "src/app/Modules/shared/services/employee.service";

@Component({
    selector:'app-nav-bar',
    templateUrl:'./nav.component.html',
    styleUrls:['./nav.component.scss']
})

export class NavComponent{
 view:boolean=true;
    constructor(private route: Router,private service:EmployeeService){}

    emp:any=[];
  detail:any=[];
    ngOnInit(){
      

       
        this.service.getuserprofile().subscribe((data)=>{
          
          if(data!=null && data!=0)
          {
        
           
            this.emp='';
            this.emp=data;
          
           
          }
          else{
            this.route.navigate(['Auth/Login'])
          }
          })
    }

    logout(){
      
      localStorage.clear();
      this.route.navigate(['Auth/Login']);
    }
}