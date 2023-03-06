import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";

@Component({
selector:'app-login',
templateUrl:'./login.component.html',
styleUrls:['./login.component.scss']

})

export class LoginComponent{

    emp_id:string='';
    password:string='';
    emp:any;

    constructor(private service:AuthService, private route: Router){}

    login(){
     debugger
        if(this.emp_id=='' || this.password=='')
        {
            alert("Please fill the given inputbox!")
    }
    else{
        this.service.Login(this.emp_id,this.password).subscribe((data)=>{
            debugger
            if(data.emp_id==null)
            {
              this.emp=data;
              alert("Login Successfully");
              this.route.navigate(['/Overtime']);

              localStorage.setItem("Logindetail",JSON.stringify(this.emp))
            }
            else{
              
                alert("please enter correct info!");
            }
        

    })
       
    }
    }
}