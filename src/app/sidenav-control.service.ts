import { MatSidenav } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavControlService {
  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }
  constructor() {}

  public toggle() {
    this.sidenav.toggle();
  }
}
