import { SidenavControlService } from './../sidenav-control.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private sidenavService: SidenavControlService) {}

  toggleSidenav() {
    this.sidenavService.toggle();
  }
  ngOnInit() {}
}
