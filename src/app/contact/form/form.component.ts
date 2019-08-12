import { HttpClient } from '@angular/common/http';
import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable, Subscribable } from 'rxjs';

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
  serverResponseStatus = false;
  serverResponse = '';

  constructor(private sendMessageService: HttpService) {}

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
    const formData = this.contactForm.value;
    console.warn({ 'Form data': formData });

    this.sendMessageService.sendMessage(formData).subscribe(
      response => {
        console.log('Success: ', response);
        this.serverResponse = response.message;
        this.serverResponseStatus = true;
      },
      error => {
        console.error('Failure: ', error);
        this.serverResponse = error;
        this.serverResponseStatus = true;
      }
    );
    this.submitted = true;
  }

  ngOnInit() {}
}
