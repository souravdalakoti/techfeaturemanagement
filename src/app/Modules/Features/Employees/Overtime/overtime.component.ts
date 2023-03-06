import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbDatepicker, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { EmployeeService } from "src/app/Modules/shared/services/employee.service";

@Component({
selector:'app-overtime',
templateUrl:'./overtime.component.html',
styleUrls:['./overtime.component.scss']
})

export class OvertimeComponent{
//here
view:boolean=true;
show:boolean=true;
visible:boolean=true;
emp_detail_id:number=0;
overtime_record:any=[];
pageindex: number = 0;
totalNoOfPages: number = 0;
pagesize: number = 10;
activity:any=[];
pending:string="../../../../../assets/images/icons8-pending-24.png";
approved:string="../../../../../assets/images/icons8-verified-account-32.png";
rejected:string="../../../../../assets/images/icons8-rejected-64.png";
constructor(private service:EmployeeService){}
ngOnInit(){
    
    this.service.getuserprofile().subscribe((result)=>{
        
        this.emp_detail_id=result.id;
        this.getemployeeovertimerecord(); 

       }) 

   
}
hidemodal(hide:boolean)
{
this.view=hide;
}
ngOnChanges(){
    debugger
this.getemployeeovertimerecord();  
}
getemployeeovertimerecord(){
    var model={
        id:this.emp_detail_id,
        index:this.pageindex,
        pagesize:this.pagesize
    }
    this.service.GetOvertimeActivity(this.emp_detail_id).subscribe((result)=>{

        this.activity=result;
        this.service.GetEmployeeOvertimeRecord(model).subscribe((result)=>
        {
            
            this.overtime_record=result;
            if(this.overtime_record)
            {
                debugger        
            this.totalNoOfPages = Math.ceil(this.overtime_record[0].totalcountofpage / this.pagesize);
            }
        })
    })
    
}
onIndexChanged(index: number) {
    debugger
    this.pageindex = index;
    this.getemployeeovertimerecord();
}
GetPreviousRecord() {
    debugger
    if (this.pageindex == 0)
        return;
    this.pageindex--;
    this.getemployeeovertimerecord();
}

GetNextRecord() {
    debugger
    if ((this.pageindex + 1) == this.totalNoOfPages)
        return;
    this.pageindex++;
    this.getemployeeovertimerecord  ();
}
}