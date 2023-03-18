import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../../shared/services/employee.service";

@Component({
    selector:"app-profile",
    templateUrl:"./profile.component.html",
    styleUrls:["./profile.component.scss"]
})

export class ProfileComponent{
    show:boolean=true;
    id:any;
   emp:any=[];
 
   number:number=0;

    constructor(private service:EmployeeService,private router: ActivatedRoute){}
    ngOnInit(){
        
    
        
         
          this.service.getuserprofile().subscribe((data)=>{
             
             if(data!=null && data!=0)
             {
           
              
               this.emp='';
               this.emp=data;
             
              
             }
             else{
               this.emp='';
             }
             })
         
 
 }
}