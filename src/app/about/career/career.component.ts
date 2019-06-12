import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  reset(stepper: MatStepper) {
    stepper.selectedIndex = 0;
  }
}
