import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewsRoutingModule
  ],
  declarations: [
    NewsComponent
  ],
})
export class NewsModule { }
