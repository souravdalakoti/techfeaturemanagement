import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";

@Injectable()

export class TFInvoiceService{

   private readonly apiController: string = 'TFinvoice';
   

   constructor(private api: HttpService) { }
   GetAllTFInvoiceDetail(){
    
    return this.api.get(this.apiController + "/GetAllTFInvoiceDetail");
   }
   AddInsertInvoiceDeatils(invoice:any){
      return this.api.post(this.apiController+"/AddInsertInvoiceDeatils",invoice);
    }
    GetInvoiceDetailbyId(invoice_id:number){
      const httpOptions = {
         headers: new HttpHeaders({'Accept': 'application/pdf'
       }),  withCredentials: false , responseType: 'blob'
       };
      return this.api.get(this.apiController+"/GetInvoiceDetailbyId?invoice_id="+invoice_id,httpOptions)
    }

}
