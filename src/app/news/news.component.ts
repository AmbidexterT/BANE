import { Component, OnInit } from '@angular/core';
import moment, { Moment } from 'moment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  currentYear: number;
  currentDay: number;
  currentMonthName: string;
  currentWeekDayName: string;
  currentDate: Moment;
  constructor() {}

  ngOnInit(): void {
    this.currentDate = moment();
    this.currentYear = this.currentDate.year();
    this.currentMonthName = this.currentDate.format('MMMM');
    this.currentDay = this.currentDate.date();
    this.currentWeekDayName = this.currentDate.format('dddd');

    console.log(this.currentDate)
  }



}
