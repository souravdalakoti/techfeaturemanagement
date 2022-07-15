import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "src/app/Modules/shared/services/employee.service";

@Component({
    selector:"app-detail",
    templateUrl:'./detail.component.html',
    styleUrls:['./detail.component.css']
})

export class DetailComponent{
    
        show:boolean=true;
        id:any;
       emp:any=[];
       number:number=0;
    constructor(private serive:EmployeeService,private router: ActivatedRoute){}

    ngOnInit(){
       
        this.router.params.subscribe(params=>{

            this.id=params;
        })
         this.number=Number(this.id.id)
         this.serive.GetEmployeeDetailById(this.number).subscribe((data)=>{
            debugger
            if(data!=null && data!=0)
            {
              var i = data[0].emp_image;
              console.log(i);
              this.emp='';
              this.emp=data;
             
            }
            else{
              this.emp=[];
            }
            })
        

}
}