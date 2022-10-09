import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InfoRoutingModule
  ],
  declarations: [
    InfoComponent
  ],
})
export class InfoModule { }
