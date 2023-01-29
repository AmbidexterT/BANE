import { Component, OnInit } from '@angular/core';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  ngOnInit(): void {

  }

  openLink() {
    window.open("https://www.buymeacoffee.com/nospaceforerror", '_blank')
  }


}
