import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TFInvoiceComponent } from '../tfinvoice.component';
import { CreateInvoiceComponent } from './create_invoice.component';






const routes: Routes = [
{path:'',component:CreateInvoiceComponent},
{path:'',component:TFInvoiceComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateInvoiceRoutingModule { }
