import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbDatepicker, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { EmployeeService } from "src/app/Modules/shared/services/employee.service";

@Component({
selector:'app-employee',
templateUrl:'./employee.component.html',
styleUrls:['./employee.component.scss']
})

export class LeaveEmployeeComponent{
//here
view:boolean=true;
show:boolean=true;
visible:boolean=true;
emp_id:number=0;
leave_record:any=[];
duration_type:any=[];
pageindex: number = 0;
totalNoOfPages: number = 0;
total_records: number = 0;
pagesize: number = 10;
constructor(private service:EmployeeService){}
ngOnInit(){
   
    this.service.getuserprofile().subscribe((result)=>{
       
    this.emp_id=result.id;
    this.GetemployeeLeaveRecord();
    this.getleavedurationrecord();
    
    })
   
}
hidemodal(hide:boolean)
{
this.view=hide;
this.GetemployeeLeaveRecord();

}
onIndexChanged(index: number) {
   
    this.pageindex = index;
    this.GetemployeeLeaveRecord();

}
GetPreviousRecord() {
   
    if (this.pageindex == 0)
        return;
    this.pageindex--;
    this.GetemployeeLeaveRecord();
}

GetNextRecord() {
   
    if ((this.pageindex + 1) == this.totalNoOfPages)
        return;
    this.pageindex++;
    this.GetemployeeLeaveRecord();
}

GetemployeeLeaveRecord(){

    var res = {
        id: this.emp_id,
        index: this.pageindex,
        pagesize: this.pagesize

    }
    this.service.GetemployeeLeaveRecord(res).subscribe((data)=>{
      
        if(data!=null)
        {
        this.leave_record=data;
       debugger
       this.total_records=this.leave_record[0].totalrecords ;
        this.totalNoOfPages = Math.ceil(this.leave_record[0].totalrecords / this.pagesize);
        for(var i=0;i<this.leave_record.length;i++)
        {
            this.leave_record[i].series_number=i+1;
            var datestring=((new Date(this.leave_record[i].date_from)).toDateString()).split(" ",4);
            this.leave_record[i].date_from=datestring[1]+" "+datestring[2]+","+datestring[3];
            if(this.leave_record[i].date_to==null)
            {
                this.leave_record[i].date_to=this.leave_record[i].date_from
            }
            else
            {
              var datestrings=((new Date(this.leave_record[i].date_to)).toDateString()).split(" ",4);
            this.leave_record[i].date_to=datestrings[1]+" "+datestrings[2]+","+datestrings[3];  
            }
            
        }
    
        }
    })
}
getleavedurationrecord(){
    this.service.Getleavedurationrecord(this.emp_id).subscribe((result)=>{
        this.duration_type=result;
    })
}
}
