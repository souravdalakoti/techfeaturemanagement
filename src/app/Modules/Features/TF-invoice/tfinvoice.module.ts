import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TFInvoiceComponent } from './tfinvoice.component';
import { TFInvoiceRoutingModule } from './tfinvoice-routing.module';
import { TFInvoiceService } from '../../shared/services/TF-invoice.service';

@NgModule({
  declarations: [
    TFInvoiceComponent
  ],
  imports: [
    TFInvoiceRoutingModule,RouterModule,CommonModule,FormsModule
  
  ],
  providers: [
    TFInvoiceService
  ],
  bootstrap: []
})
export class TFInvoiceModule {}