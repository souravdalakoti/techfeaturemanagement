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
 activity_id:any=[];
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
hours:number=0;
mins:number=0;
secs:any;
hh:any='00';
mm:any='00';
ss:any='00';
timer1:any; 
timer2:any;
timer3:any;
activitylist:any=[];


    constructor(private service:EmployeeService){}
ngOnInit(){
    
this.currentdate=new Date().toDateString();
this.daTe=this.currentdate.split(/\s+/);
this.getdate=this.daTe[2]+' '+this.daTe[1]+' '+this.daTe[3];
this.service.getuserprofile().subscribe((data)=>{
   
this.id=data.id;
this.service.activitylist(this.id).subscribe((result)=>{
    debugger;
this.activitylist=result;
for(var i=0;i<this.activitylist.length;i++)
{
    var series_number=i+1;
    this.activitylist[i].series_number=series_number;
    var datee=new Date(this.activitylist[i].date);
    var datetime=(new Date(this.activitylist[i].date).toDateString()).split(" ",4);
    var datestring=datetime[2]+' '+datetime[1]+' '+datetime[3];
    this.activitylist[i].date=datestring;

    this.activitylist[i].punch_in=new Date(this.activitylist[i].punch_in);
    this.activitylist[i].punch_out=new Date(this.activitylist[i].punch_out);
}  
})
this.service.activity(this.id).subscribe((result)=>{

    this.labelofpunchin();
    var ww= result.working_hours.split(":",3);
    if(Number(ww[0])!=0 && Number(ww[0])>=10)
    this.hh=Number(ww[0]);
    else
    this.hh='0'+Number(ww[0]);
    if(Number(ww[1])!=0 && Number(ww[1])>=10)
    this.mm=Number(ww[1]);
    else
    this.mm='0'+Number(ww[1]);
    if(Number(ww[2])!=0 && Number(ww[2])>=10){
    this.ss=Math.trunc(Number(ww[2]));}
    else{
    this.ss='0'+Math.trunc(Number(ww[2]));}
    var x=result.working_hours;
    this.break=result.break_hours;
    
   this.activity_id= result.activity[result.activity.length-1].activity_id;
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
    this.interval(1);
    this.hide=false;
}
if(result.activity[result.activity.length-1].punch_out!=null)
{
    this.interval(0);
    this.hide=true;
}
})
})

}


interval(T:number)
{   



            if(T==0)
            {
          
                clearInterval(this.timer1);
              
            }

                else{
              
                
                   
            this.timer1=setInterval(()=>{
            
               this.ss++;
             
               if(this.ss==60) 
              {
                this.mm++;
                
                this.ss=0;
              }
              if(this.mm==60)
                {
                     this.hh++;
                    
                     this.mm=0;
                }
                
                if(this.ss<10)
                {
                    this.ss='0'+Number(this.ss);
                }
                if(this.mm<10)
                {
                    this.mm='0'+Number(this.mm);
                }
                if(this.hh<10)
                {
                    this.hh='0'+Number(this.hh);
                }
              
            
               
            },1000)
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
    this.labelofpunchin();
      var history=new Date(data.punch_in);
      this.activity.push({punch_in:history,punch_out:null});
     
      this.break+=data.break_in_hours;
      
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

    labelofpunchin(){

        this.service.activity(this.id).subscribe((result)=>{
            debugger
            this.time=new Date(result.activity[0].punch_in);
            var datetime=new Date(result.activity[0].punch_in.split(" ",1));
            var _date=datetime.toDateString();
            var datesplit=_date.split(/\s+/);
            this.punch_in=datesplit[0]+', '+datesplit[2]+' '+datesplit[1]+' '+datesplit[3];});
    }
}

