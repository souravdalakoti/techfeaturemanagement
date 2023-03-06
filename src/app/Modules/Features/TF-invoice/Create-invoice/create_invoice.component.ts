import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TFInvoiceService } from 'src/app/Modules/shared/services/TF-invoice.service';

@Component({
  selector: 'app-tfinvoice',
  templateUrl: './create_invoice.component.html',
  styleUrls: ['./create_invoice.component.scss']
})
export class CreateInvoiceComponent  {
    Name:string="";
    Address:string="";
    City:string="";
    State:string="";
    Country:string="";
    Phone:string="";
    Email:string="";
    GST_No:string="";
    website:string="";
    Name1:string="";
    Address1:string="";
    City1:string="";
    State1:string="";
    Country1:string="";
    Phone1:string="";
    Email1:string="";
    GST_No1:string="";
    Description:string="";
    Amount:string="";
    GST_percent:string="";
    GST_Amount:string="";
    Total_Amount:string="";
    invoice:any;
    

  constructor(private service:TFInvoiceService,private router:Router) { }

  ngOnInit(): void {
  }

  AddInsertInvoicedata(){
    debugger;
    if(this.Name==""||this.Address=="")
    {
      alert("Please fill all required fields");
      return;
    }
    debugger
    this.invoice =
    {
        "invoice_from_name": this.Name,
        "invoice_from_address": this.Address,
        "invoice_from_city": this.City,
        "invoice_from_state": this.State,
        "invoice_from_country":this.Country,
        "invoice_from_phone":this.Phone,
        "invoice_from_email":this.Email,
        "invoice_from_website":this.website,
        "invoice_to_name":this.Name1,
        "invoice_to_address":this.Address1,
        "invoice_to_city":this.City1,
        "invoice_to_state":this.State1,
        "invoice_to_country":this.Country1,
        "invoice_to_phone":this.Phone1,
        "invoice_to_email":this.Email1,
        "invoice_to_gst_number":this.GST_No1,
        "description":this.Description,
        "amount":this.Amount,
        "gst_percent":this.GST_percent,
        "gst_amount":this.GST_Amount,
        "total_amount":this.Total_Amount
    }
    this.service.AddInsertInvoiceDeatils(this.invoice).subscribe((data ) => {
      debugger;
      if(data==true)
      {
        alert("Add Succesfully")
        this.router.navigate(['/TFInvoice'])
      }
     else{
      alert("Something went wrong");
     }
       
  });




  }
}