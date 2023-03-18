import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TFInvoiceComponent } from './tfinvoice.component';




const routes: Routes = [
{path:'',component:TFInvoiceComponent},
  {path:'createinvoice',loadChildren: () => import('./Create-invoice/create_invoice.module').then(m => m.CreateInvoiceModule)},
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TFInvoiceRoutingModule { }
