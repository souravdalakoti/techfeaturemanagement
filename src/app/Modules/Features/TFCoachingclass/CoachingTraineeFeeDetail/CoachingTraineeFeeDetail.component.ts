import { DatePipe, formatDate } from "@angular/common";
import { ThisReceiver } from "@angular/compiler";
import{ Component }from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { of } from "rxjs";
import{ TFCoachingclassService }from "src/app/Modules/shared/services/TFCoachingclass.services";


@Component({
  providers: [DatePipe],
selector: 'app-TFCoachingclass',
templateUrl: './CoachingTraineeFeeDetail.component.html',
})
 
export class CoachingTraineeFeeDetailComponent
{
    Id:any;
    GetId: any;
    CoachingTraineeFeeDetail: any;
    Feedetail:any;
    Listdate:any;
    FinalFeerecords:any;
    currentdate:any;
    date:any;
    Doj: any;
  Student_training_id: any;
  Fee_status:any;
  
  
  Date: any;
  Listdata: any;
  DBListdata: any;
  FinalFeeResult: any;
  DBdate: any;
  DBListdate: any;
  Paid_amount: any;
  
  Fee_status_id: any;
  value:any;
  modelclose: any;
  Feestatus: any;
  Status_name: any;
  Value: any;
  Fee_detail_id: any;
  Fee: any;
  
  
  
 

    constructor(private activatedroute:ActivatedRoute,private modalService:NgbModal,private TFCoachingclassservice: TFCoachingclassService,private route:Router){}

    ngOnInit(): void 
  {   
    
        this.activatedroute.queryParams.subscribe(params=>{

            this.GetId = params["Id"];
        
        }
      );

      
      // this.TFCoachingclassservice.GetCoachingTraineeFeeDetail(this.GetId).subscribe(data=>{
      //   this.CoachingTraineeFeeDetail=data; 
      //   
    
      //   this.Doj=this.CoachingTraineeFeeDetail[0].doj
      //   console.log(this.Doj)

      //   var doj = new Date(this.Doj);
      //   var Currentdate = new Date();
      //   var dates = [];
      //   while(doj.getMonth()<Currentdate.getMonth())
      //   {
      //     doj.setMonth(doj.getMonth() + 1)
      //     dates.push({fee_detail_id:null,date:formatDate(new Date(doj),'yyyy-MM-dd ','en_US'),paid_amount:null,fee_status:"Pending"})
      //   }
      //   var i=0
      //   var FinalFeeRecord:any=[];
            
    //     while(i!=dates.length)
    //     {
    //       for(var j=0;j<this.CoachingTraineeFeeDetail.length;j++)
    //       {
    //        if(dates[i].date==formatDate(new Date(this.CoachingTraineeFeeDetail[j].date),'yyyy-MM-dd ','en_US'))
    //         {
    //          FinalFeeRecord.push(this.CoachingTraineeFeeDetail[j]);
    //          i++
    //         }
    //         else
    //         {
    //           FinalFeeRecord.push(dates[i])
    //            i++
    //         }
    //       }
    //       this.FinalFeeResult=FinalFeeRecord;  
    //     }
    //   })
    // }


    
    this.TFCoachingclassservice.GetCoachingTraineeFeeDetail(this.GetId).subscribe(data=>{
      this.CoachingTraineeFeeDetail=data; 
      
  
      this.Doj=this.CoachingTraineeFeeDetail[0].doj
      console.log(this.Doj)

      var doj = new Date(this.Doj);
      var Currentdate = new Date();
      var dates = [];
    while(doj.getMonth()<Currentdate.getMonth())
     {
       doj.setMonth(doj.getMonth() + 1)
       dates.push({date:formatDate(new Date(doj),'yyyy-MM-dd ','en_US')})
     }
     var i =0

     var FinalFeeRecord:any=[];
     while(i!=dates.length)
      {
      for(var j=0;j<this.CoachingTraineeFeeDetail.length;j++)
      {
        if(dates[i].date==formatDate(new Date(this.CoachingTraineeFeeDetail[j].date),'yyyy-MM-dd ','en_US'))
        {
          FinalFeeRecord.push(this.CoachingTraineeFeeDetail[j]);
          i++;
        }
        else
        {
          FinalFeeRecord.push({date:dates[i].date,fee_detail_id:null,paid_amount:null,fee_status:"Pending",student_training_id:this.CoachingTraineeFeeDetail[0].student_training_id,fee:this.CoachingTraineeFeeDetail[0].fee})
          i++

        }
      }

       this.FinalFeeResult=FinalFeeRecord; 
   }
  })

  this.TFCoachingclassservice.GetFeeStatus().subscribe((data)=>{
    this.Feestatus=data;
  })
}

Firstmodel(content:any,date:any,student_training_id:any,fee:any)
{
  this.Date=date
  this.Student_training_id=student_training_id
  this.Fee=fee
  this.modelclose=this.modalService.open(content);
  this.modelclose.result.then((_result: any)=>{
  
  })
}

SubmitTraineeFee()
{
  
  this.value=
  {
    "date":this.Date,
    "paid_amount":this.Paid_amount,
    "student_training_id":this.Student_training_id,
    "fee":this.Fee
  }

  this.TFCoachingclassservice.SubmitTraineeFee(this.value).subscribe((data)=>{
  this.ngOnInit()
    if(data==true)
    {
     alert("Fee Submitted")
     this.modelclose.close();
   }
   else
   {  
     alert("Fee not Submitted")
   }
  
 })

}
    return()
    {
        this.route.navigate(['/TFCoachingclass'])
    }
  
    }
  

     

