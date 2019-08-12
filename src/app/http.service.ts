import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = 'http://joshuakpearson.com:8443/api/form';

  constructor(private http: HttpClient) {}

  sendMessage(formData) {
    return this.http.post<any>(this.apiUrl, { params: formData });
  }
}
