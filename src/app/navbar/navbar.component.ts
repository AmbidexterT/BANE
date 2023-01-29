import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { delay } from 'rxjs/operators';
import moment from 'moment/moment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  volumeOn: boolean = true;
  currentYear: number;

  constructor(private observer: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.currentYear = moment().year();
    }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 700px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  changeVolume() {
    this.volumeOn = !this.volumeOn;
  }
}
