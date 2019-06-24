import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavControlService } from './sidenav-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'joshuakpearson';

  @ViewChild('sideNav', { static: true }) sidenav: MatSidenav;

  constructor(private sidenavService: SidenavControlService) {}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
