import { Component, OnInit } from '@angular/core';
import { TFInvoiceService } from '../../shared/services/TF-invoice.service';

@Component({
  selector: 'app-tfinvoice',
  templateUrl: './tfinvoice.component.html',
  styleUrls: ['./tfinvoice.component.scss']
})
export class TFInvoiceComponent  {
  cust:any[]=[];
  Invoice_id:number=0;
  getinvoice:any;
  constructor(private service:TFInvoiceService) { }

  ngOnInit(): void {
    debugger
    this.service.GetAllTFInvoiceDetail().subscribe((data)=>{
       debugger      
      if(data!=null && data!=0)
      {
    
       
        
        this.cust=data;
      
       
      }
      })
    
  }
  Generatepdf(invoice_id:number){
    
      this.Invoice_id=invoice_id;
      
          this.service.GetInvoiceDetailbyId(invoice_id).subscribe((_)=>{
            debugger;
            window.open(URL.createObjectURL(_));
          })
        
  
        }

}
