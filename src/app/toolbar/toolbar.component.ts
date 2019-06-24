import { Component, OnInit } from '@angular/core';

import { SidenavControlService } from '../sidenav-control.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private sidenavService: SidenavControlService) {}

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  ngOnInit() {}
}
