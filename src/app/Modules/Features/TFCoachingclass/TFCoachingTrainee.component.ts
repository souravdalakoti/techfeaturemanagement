import{ Component }from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import{ TFCoachingclassService }from "src/app/Modules/shared/services/TFCoachingclass.services";


@Component({
selector: 'app-TFCoachingclass',
templateUrl: './TFCoachingTrainee.component.html',
styleUrls: ['./TFCoachingTrainee.component.scss']
})

export class TFCoachingTraineeComponent
{
  TFCoachingTrainee: any;
  modelclose: any;

  Data:any;
  name: any;
  doj: any;
  fee: any;
  modelcl: any;
  value: any;
  trainee_id: any;
  CoachingTrainee: any;
  Trainee_id: any;
  Name: any;
  Fee: any;
  IsDeleteConfirmationPopup: boolean = false;
  Id: any;
  
    

  constructor(private modalService: NgbModal,private TFCoachingclassservice: TFCoachingclassService,private router:Router){}

  ngOnInit()
  {
    this.GetCoachingTraineeDetails();
  }

  GetCoachingTraineeDetails()
 {
   this.TFCoachingclassservice.GetCoachingTraineeDetail().subscribe((data) =>
    {
     this.TFCoachingTrainee = data;
                

    })
  }
  Firstmodel(content:any)
  { 
    this.modelclose=this.modalService.open(content);
    this.modelclose.result.then((_result: any)=>{

    })
    
  }
  AddCoachingTrainee()
  {
    debugger;
    this.Data=
    {
      "Name":this.name,
      "Fee":this.fee,
    }
    this.TFCoachingclassservice.AddCoachingTrainee(this.Data).subscribe((data)=>{
       this.GetCoachingTraineeDetails();
       
       if(data==true)
       {
        alert("Data inserted")
        this.modelclose.close();
      }
      else
      {
        alert("Data not inserted")
      }
    })
  }
  
  GetCoachingTraineeById(Id:number,content:any)
  {
    this.TFCoachingclassservice.GetCoachingTraineeById(Id).subscribe(data=>
      {
        this.CoachingTrainee=data;
        
        this.Trainee_id=this.CoachingTrainee.trainee_id;
         this.Name=this.CoachingTrainee.name;
         this.Fee=this.CoachingTrainee.fee;
         this.modelcl=this.modalService.open(content)
         this.modelcl.result.then((result: any)=>
         {

        })
      })
 }
 Feedetail(value:any)
 {
   this.router.navigate(['/TFCoachingclass/CoachingTraineeFeeDetail'], { queryParams: { Id:value}})
  }
  
  UpdateCoachingTrainee()
  {
  
    this.value=
    {
       "trainee_id":this.Trainee_id,
        "name":this.Name,
        "fee":this.Fee
    }
     this.TFCoachingclassservice.UpdateCoachingTrainee(this.value).subscribe((data)=>
     {
       console.log(data)
        this.GetCoachingTraineeDetails();
        this.modelcl.close();
      })

          
  }
  DeletePaytmResponseCode(  trainee_id: any) {
    
    this.IsDeleteConfirmationPopup = true;
    this.Id=trainee_id;

  }
  GetDeleteConfirmation(is_active:any) {
    if (is_active) {
    
      this.TFCoachingclassservice.DeleteCoachingTrainee(this.Id).subscribe((data) => {
        
        if (data== true) 
        {
           this.IsDeleteConfirmationPopup = false;
           this.GetCoachingTraineeDetails();
        }
        else 
        {
          this.Id = "";
          alert('Something went wrong..!')
        }
      })
    }
    else
     {
      this.IsDeleteConfirmationPopup = false;
    }
  }

  
  DeleteCoachingTrainee(Id:number)
  {
    alert(Id)
    this.TFCoachingclassservice.DeleteCoachingTrainee(Id).subscribe((data)=>
     {
       this.GetCoachingTraineeDetails();
      })
  }
}

      
  


    





