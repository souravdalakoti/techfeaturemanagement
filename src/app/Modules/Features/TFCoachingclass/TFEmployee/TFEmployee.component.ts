import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TFEmployeeService } from "src/app/Modules/shared/services/TFEmployee.service";


@Component({
    selector: 'app-TFEmployee',
    templateUrl: './TFEmployee.component.html',
    styleUrls: ['./TFEmployee.component.scss']
})

export class TFEmployeecomponent {
    title = 'TFM_System';
    getemploy:any
  
    employ: any;
    Name1: string = "";
    Address1: string = "";
    DOJ1: string = "";
    Mobile1: string = "";
    name: any;
    address: any;
    doj: any;
    mobile: any;
   updateEmploy:any
    Showpopups: Boolean = false;
    employeeservice: any;

    modelclose: any;
    modelcl: any;
    EmployeeId: any;

    constructor(private TFEmployeeservice: TFEmployeeService, private modalService: NgbModal) { }

    ngOnInit() {
        //debugger;
        this.getAllEmployees();
    }
    
    getAllEmployees() {
        debugger;
        this.TFEmployeeservice.Getallemployees().subscribe((data) => {
            debugger;
            this.employ = data;
        })
    }

    Firstmodel(content: any) {
        this.modelclose = this.modalService.open(content);
        this.modelclose.result.then((_result: any) => {
         this.name="";
         this.address="";
         this.doj="";
         this.mobile="";
        })
    }


    AddInsertdata() {
        this.employ =
        {
            "Name": this.name,
            "Address": this.address,
            "DOJ": this.doj,
            "Mobile": this.mobile


        }
        this.TFEmployeeservice.AddInsertdata(this.employ).subscribe((data) => {
            this.getAllEmployees();
            this.modelclose.close();
        });

    }
    Editpopup(employeeId: number, content: any) {
        debugger;
        this.EmployeeId=employeeId;

        this.TFEmployeeservice.GetEmployeebyId(employeeId).subscribe(data=>
            {
              this.getemploy=data;
              
              this.Name1=this.getemploy.name;
               this.Address1=this.getemploy.address;
               this.DOJ1=this.getemploy.doj;
               this.Mobile1=this.getemploy.mobile;
               this.modelcl=this.modalService.open(content)
               this.modelcl.result.then((result: any)=>
               {
      
              })
            })


            
    }
    

    Updatedata() {
        debugger;
        const updateEmploy =
        {
            "EmployeeId":this.EmployeeId,
            "Name": this.Name1,
            "Address": this.Address1,
            "DOJ": this.DOJ1,
            "Mobile": this.Mobile1
        }
        this.TFEmployeeservice.Updatedetails(updateEmploy).subscribe((data) => {
            this.getAllEmployees();
            this.modelcl.close();
        });
    }

    Deldata(employeeId: any) {
        debugger;
        this.TFEmployeeservice.Deldata(employeeId).subscribe(() =>
        {
            this.getAllEmployees();
           
        });
    }
}

