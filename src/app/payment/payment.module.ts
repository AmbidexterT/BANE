import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaymentRoutingModule
  ],
  declarations: [
    PaymentComponent
  ],
})
export class PaymentModule { }
