import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  loginObj = {
    email: String,
    password: String,
  };

  registerObj = {
    email: String,
    password: String,
  };

  constructor(private http: HttpClient) {}

  LoginCheck(email, password) {
    console.log('login-check working');
    this.loginObj = {
      email: email,
      password: password,
    };
    return this.http.post('https://reqres.in/api/login', this.loginObj);
  }
  Register(email, password) {
    console.log('register working');
    this.registerObj = {
      email: email,
      password: password,
    };
    return this.http.post('https://reqres.in/api/register', this.registerObj);
  }
}
