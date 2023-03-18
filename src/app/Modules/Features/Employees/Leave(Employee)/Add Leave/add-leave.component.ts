import { Component, EventEmitter, Input, Output } from "@angular/core";  
import { Router } from "@angular/router";
import { status } from "src/app/Enum/status";
import { EmployeeService } from "src/app/Modules/shared/services/employee.service";


@Component({
    selector:'add-leave-employee',
    templateUrl:'./add-leave.component.html',
    styleUrls:['./add-leave.component.scss']
    })

    export class AddLeaveComponent
    {
        
        show:boolean=true;
        halfday1:boolean=false;
        halfday2:boolean=false;
        firsthalf1:boolean=false;
        secondhalf1:boolean=false;
        leavetype:any=[];
        leave_type_id:number=0;
        days_duration_type:number=0;
        date_from:any={};
        date_to:any={};
        halfdayincluded:boolean=false;
        number_of_days:any='';
        firsthalf:boolean=false;
        secondhalf:boolean=false;
        included:any;
        emp_id:any;
        reason:any='';
        status_id:number=status.New;
        @Input() view:boolean=true;
        @Output() hide=new EventEmitter();
            constructor(private service:EmployeeService,private route:Router){
                
            }
            ngOnInit(){
                this.service.getuserprofile().subscribe((result)=>{
                this.emp_id=result.id;
                })
               this.service.getleavetype().subscribe((data)=>{
                    debugger
                    this.leavetype=data;
                   
                })
            }
            
           morethanone(){
            debugger
            var date1 = new Date(this.date_from.month + '/' + this.date_from.day + '/' + this.date_from.year); 
            var date2 = new Date(this.date_to.month + '/' + this.date_to.day + '/' + this.date_to.year); 
          
             var Time = date2.getTime() - date1.getTime(); 
            var Days = Time / (1000 * 3600 * 24);
           
            // else if(this.days_duration_type==2 )
            // {
            //  this.number_of_days=1;
            // }
            if(this.date_to.year!=null && this.days_duration_type==3)
            {
                debugger
                    if(Days<0)
                    {
                        this.number_of_days='please enter correct data';
                    }
                    else
                    {
                    if(this.firsthalf1==true && this.halfdayincluded==true)
                    {
                            if(this.firsthalf1==true && this.secondhalf1==true)
                        {
                            this.number_of_days=Days+1;
                        }else
                        {
                            this.number_of_days=Days+0.5;
                        
                        }
                    }
                   else if( this.secondhalf1==true && this.halfdayincluded==true)
                    {
                        this.number_of_days=Days+.5;
                    }
                    else
                    {
                        this.number_of_days=Days;
                    }
                    }
            }
            
            else{
                this.number_of_days='';
            }
            
          
           }
            halfday()
            {
        
                    this.number_of_days=0.5;
        
                }
            fullday()
            {
                this.number_of_days=1;
            }
            
            Submitt()
            {
                debugger;
                var date1 = (new Date(this.date_from.day + '/' + this.date_from.month + '/' + this.date_from.year)).toLocaleString();
                var date2 = null; 
                
                if(this.days_duration_type==1)
                {
                    this.firsthalf=this.halfday1;
                    this.secondhalf=this.halfday2;
                    
                }
                else if(this.days_duration_type==3)
                {
                 this.firsthalf=this.firsthalf1;
                 this.secondhalf=this.secondhalf1;
                 date2=new Date(this.date_to.month + '/' + this.date_to.day + '/' + this.date_to.year); 
                }
                
                var data={
                    emp_id:this.emp_id,
                    leave_type_id:this.leave_type_id,
                    date_from:date1,
                    date_to:date2,
                    leave_duration_type:this.days_duration_type,
                    first_half:this.firsthalf,
                    second_half:this.secondhalf,
                    days_duration:this.number_of_days,
                    reason:this.reason,
                    status_id:this.status_id
                };
                this.service.SaveEmployeeLeave(data).subscribe((result)=>{
                    debugger;
                    if(result==0)
                    {
                        alert("Oops Didn't Got It")
                    }
                    else
                    {
                        alert("Leave Request Submitted Successfuly");
                        this.close();
                        
                    }
                })
            }
            close(){
                debugger
                this.leavetype='';
                this.leave_type_id=0;
                this.days_duration_type=0;
                this.date_from={};
                this.date_to={};
                this.halfdayincluded=false;
                this.number_of_days='';
                this.firsthalf=false;
                this.secondhalf=false;
                this.included='';
                this.reason='';
                this.show=true;
                this.halfday1=false;
                this.halfday2=false;
                this.firsthalf1=false;
                this.secondhalf1=false;
                this.ngOnInit();
              this.view=!this.view;
            this.hide.emit(this.view);
            }
            alert:number=0;
            getremainingearnleave(){
   
                this.service.GetRemainingEarnLeave(this.emp_id).subscribe((result)=>
                {
                    if(result<=0)
                    {
                        this.leave_type_id=0;
                        alert("You haven't any remaining casual leave for more please talk to HR!Thank You..");
                        
                    }
                })
            }
            getremainingmedicalleave(){
                this.service.GetRemainingMedicalLeave(this.emp_id).subscribe((result)=>
                {
                    if(result<=0)
                    {
                        this.leave_type_id=0;
                        alert("You haven't any remaining medical leave for more please talk to HR !Thank You..");
                    
                    }
                })
            }
            changing_leave_type()
            {
                
                if(this.leave_type_id==1)
                {
                    this.getremainingearnleave();
                }
                else if(this.leave_type_id==2)
                {
                    this.getremainingmedicalleave();
                }
                
            }
        }
    