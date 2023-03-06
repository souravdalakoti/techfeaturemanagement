import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateInvoiceComponent } from './create_invoice.component';
import { CreateInvoiceRoutingModule } from './create_invoice-routing.module';
import { TFInvoiceService } from 'src/app/Modules/shared/services/TF-invoice.service';


@NgModule({
  declarations: [
    CreateInvoiceComponent
  ],
  imports: [
    CreateInvoiceRoutingModule,RouterModule,CommonModule,FormsModule
  
  ],
  providers: [
    TFInvoiceService
  ],
  bootstrap: []
})
export class CreateInvoiceModule {}