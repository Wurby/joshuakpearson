import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  submitted = false;
  sendButton = 'Send';

  constructor(private http: HttpClient) {}

  getEmailErrorMessage() {
    return this.contactForm.get('email').hasError('required')
      ? 'You must enter a value'
      : this.contactForm.get('email').hasError('email')
      ? 'Not a valid email!'
      : '';
  }

  getNameErrorMessage() {
    return this.contactForm.get('name').hasError('required')
      ? 'You must enter your name!'
      : '';
  }

  getMessageErrorMessage() {
    return this.contactForm.get('message').hasError('required')
      ? 'You must enter a message!'
      : '';
  }

  clear() {
    this.contactForm.reset();
  }

  sendEmail() {
    console.warn(this.contactForm.value);

    const body = new HttpParams()
      .set('email', this.contactForm.get('email').value)
      .set('name', this.contactForm.get('name').value)
      .set('message', this.contactForm.get('message').value);

    this.http
      .post('joshuakpearson.com:4201/api/form', body.toString(), {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      })
      .subscribe(res => console.log(res), err => console.log(err));

    this.contactForm.reset();
    this.submitted = true;
    this.sendButton = 'Sent';
  }

  ngOnInit() {}
}
