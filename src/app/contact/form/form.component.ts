import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);

  constructor() {}

  getEmailErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email!'
      : '';
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter your name!' : '';
  }

  getMessageErrorMessage() {
    return this.message.hasError('required') ? 'You must enter a message!' : '';
  }

  testMessage() {
    this.email.reset();
    this.name.reset();
    this.message.reset();
  }

  sendEmail() {}

  ngOnInit() {}
}
