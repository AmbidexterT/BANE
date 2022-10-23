import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeTypingComponent } from './home-typing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [
    HomeTypingComponent,
  ],
  exports: [
    HomeTypingComponent,
  ],
})
export class HomeTypingModule { }
