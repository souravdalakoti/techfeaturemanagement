import { Component, EventEmitter, Input, Output } from "@angular/core";  
import { Router } from "@angular/router";
import { EmployeeService } from "src/app/Modules/shared/services/employee.service";


@Component({
    selector:'add-overtime',
    templateUrl:'./add.component.html',
    styleUrls:['./add.component.scss']
    })

    export class AddOvertimeComponent
    {
        show:boolean=true;
        @Input() view:boolean=true;
        @Output() hide=new EventEmitter();
        emp_detail_id:number|undefined;
        overtime_date:any=[];
        overtime_hours:any;
        overtime_mins:any;
        description:string='';
        constructor(private route:Router,private service:EmployeeService){}
        ngOnInit()
        {
           this.service.getuserprofile().subscribe((result)=>{

            this.emp_detail_id=result.id;
           }) 

        }
        submitt()
        {
            var overtime_hours=null;
            
            if(typeof(this.overtime_date)!='object' || this.overtime_date=='')
            {
                return alert('Invalid Date');
            }
            
            if(this.overtime_hours==null || this.overtime_mins==null || this.overtime_hours<0 || this.overtime_mins<0 || this.overtime_hours==0 && this.overtime_mins==0 )
            {
                return alert('Something Wrong');
            }
            else{
                debugger
                    overtime_hours=this.overtime_hours+this.overtime_mins/60;
            }
            if(this.description=='')
            {
                return alert('Please fill discription');
            }
            var modal={
                emp_detail_id:this.emp_detail_id,
                date:new Date(this.overtime_date.month+'/'+this.overtime_date.day+'/'+this.overtime_date.year),
                overtime_hours_rqst:overtime_hours,
                request_description:this.description
            }
            this.service.saveemployeeovertime(modal).subscribe((result)=>
            {
                if(result>0)
                {
                    alert("overtime requested successfully")
                    this.hidemodal();
                }
                else
                {
                    alert("something went wrong please try later")
                }
            })
         
            
        }
       hidemodal(){
        this.emp_detail_id =0;
        this.overtime_date ='';
        this.overtime_hours='';
        this.overtime_mins ='';
        this.description   ='';
        this.view=!this.view;
        this.hide.emit(this.view);
       }
    }