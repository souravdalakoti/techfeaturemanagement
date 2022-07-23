import { DatePipe, getLocaleDateTimeFormat } from "@angular/common";
import { Component } from "@angular/core";
import { provideProtractorTestingSupport } from "@angular/platform-browser";
import { arrow } from "@popperjs/core";
import { EmployeeService } from "src/app/Modules/shared/services/employee.service";

@Component({
selector:'app-attendance',
templateUrl:'./attendance.component.html',
styleUrls:['./attendance.component.scss']
})

export class AttendanceComponent{
 view:boolean=true;
 show:boolean=true;
 hide:boolean=true;
 id:number=0;
 activity_id:number|undefined;
 punch_in: any=[];
 punch_out: any=[];
 currentdate:any;
 daTe:any;
 getdate:any;
 punch_indaTe:any;
 time:any;
 emp:any=[];
 break:number=0;
 activity:any=[];
hours:any='00';
mins:any='00';
secs:any='00';
timer1:any; 
timer2:any;
timer3:any;

    constructor(private service:EmployeeService){}
ngOnInit(){
    
this.currentdate=new Date().toDateString();
this.daTe=this.currentdate.split(/\s+/);
this.getdate=this.daTe[2]+' '+this.daTe[1]+' '+this.daTe[3];
this.service.getuserprofile().subscribe((data)=>{
   
this.id=data.id;
this.service.activity(this.id).subscribe((result)=>{
    debugger
    var x=result.working_hours;
    this.break=result.break_hours;
for(var i=0;i<result.activity.length;i++)
{
    if(result.activity[i].punch_out==null )
    this.activity.push({punch_in:new Date(result.activity[i].punch_in),punch_out:result.activity[i].punch_out});
    else if(result.activity[i].punch_in==null)
    this.activity.push({punch_in:result.activity[i].punch_in,punch_out:new Date(result.activity[i].punch_out)});
    else
    this.activity.push({punch_in:result.activity[i].punch_in,punch_out:result.activity[i].punch_out});
}
if(result.activity[result.activity.length-1].punch_out==null)
{

    this.hide=false;
}
if(result.activity[result.activity.length-1].punch_out!=null)
{
    this.hide=true;
}
})
})

}


interval(T:number){
    debugger
    var i=0;
var j=0;
var k=0;




if(T==0)
{
   debugger;
    clearInterval(this.timer1);
    clearInterval(this.timer2);
    clearInterval(this.timer3);
}

    else{
        debugger
this.timer1=setInterval(()=>{
    debugger
    i=this.secs; 
    i++;
   
    if(i==60)
    i=0;
    if(i<10)
    this.secs='0'+i;
    else
    this.secs=i;
},1000)


this.timer2==setInterval(()=>{
    j=this.mins; 
    j++;
   
    if(j==60)
    j=0;
    if(j<10)
    this.mins='0'+j;
    else
    this.mins=j;
},60000)
this.timer3==setInterval(()=>{
    k=this.hours; 
    k++;
   
    if(k==60)
    k=0;
    if(k<10)
    this.hours='0'+k;
    else
    this.hours=k;
},60000*60)
}
}

punchin(){
       debugger
        
         var model={
        id:this.id,
   
     }
     this.service.punchin(model).subscribe((data)=>{
        debugger
        this.emp=data;
    this.interval(1);
      var datetime=new Date(data.date);
      this.time=new Date(data.punch_in);
      var history=new Date(data.punch_in);
      this.activity.push({punch_in:history,punch_out:null});
      var _date=datetime.toDateString();
      this.break+=data.break_in_hours;
      var datesplit=_date.split(/\s+/);
      this.punch_in=datesplit[0]+', '+datesplit[2]+' '+datesplit[1]+' '+datesplit[3];
      this.activity_id=data.activity_id;
   
  

     })
        this.hide=false;
       
    }
    punchout(){
        
          var model={
            activity_id:this.activity_id,
       
          }
        this.hide=true;
        this.service.punchout(model).subscribe((data)=>{
            debugger
            this.interval(0);
            this.punch_out=data;
            var history=new Date(data.punch_out);
      this.activity.push({punch_in:null,punch_out:history});
        })
    }
}

