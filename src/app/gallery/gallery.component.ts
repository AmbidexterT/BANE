import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  top: any;
  left: any;
  expand = false;

  constructor() {}

  ngOnInit(): void {

  }

  @HostListener('document:click', ['$event'])
  onClick($event) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500);
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    this.top = ($event.pageY - 10 - 60) + 'px';
    this.left = ($event.pageX - 10 - 200) + 'px';
  }

}
