import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { viewport } from "@popperjs/core";
import { EmployeeService } from "src/app/Modules/shared/services/employee.service";

@Component({
selector:'app-employees',
templateUrl:'./employees.component.html',
styleUrls:['./employees.component.css']
})

export class EmployeesComponent{
    veiw:boolean=true;
    show:boolean=true;
    emp:any;
    designation:any|undefined;
    image:any|undefined;

    constructor(private emp_service:EmployeeService,private sanitizer: DomSanitizer){}
    
    
    ngOnInit(){
        
        debugger
        this.emp_service.GetDesignation().subscribe((data)=>
        {
            this.designation=data;
        })
      this.emp_service.GetEmployeeDetails().subscribe((result)=>{
        debugger
      if(result!=null)
      {
        var i = result[0].emp_image;
        console.log(i);
        this.emp=result;
       
      }
      else{
        alert("Oops! Something went wrong")
      }
      })

      }

}