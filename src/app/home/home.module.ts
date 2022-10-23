import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeTypingModule } from './home-typing/home-typing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    HomeTypingModule
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule { }
