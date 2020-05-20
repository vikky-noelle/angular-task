import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  login = document.getElementsByClassName('login-window') as HTMLCollectionOf<
    HTMLElement
  >;
  register = document.getElementsByClassName(
    'register-window'
  ) as HTMLCollectionOf<HTMLElement>;

  loginStatus;
  constructor(
    private cookie: CookieService,
    private post: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.cookie.check('loggedIn'));
    if (this.cookie.check('loggedIn'))
      this.loginStatus = this.cookie.get('loggedIn') === 'true';
  }

  loginWindow() {
    this.login[0].style.display = 'block';
    this.register[0].style.display = 'none';
  }
  registerWindow() {
    this.login[0].style.display = 'none';
    this.register[0].style.display = 'block';
  }
  login_send(email, password) {
    if (email.length > 0 && password.length > 0)
      this.post.LoginCheck(email, password).subscribe(
        (res) => {
          console.log(res);
          this.cookie.set('username', email);
          this.cookie.set('loggedIn', 'true');
          this.loginStatus = true;
          this.router.navigate(['/login-logout']);
        },
        (err) => {
          alert('Wrong email or password');
        }
      );
    else alert('Required Fields are empty!');
  }

  register_send(username, email, password) {
    console.log('worked');
    if (username.length > 0 && password.length > 0 && email.length > 0)
      this.post.Register(email, password).subscribe(
        (res) => {
          console.log(res);
          alert('successful registeration');
          this.cookie.set('username', email);
          this.cookie.set('loggedIn', 'true');
          this.loginStatus = true;
          this.router.navigate(['/login-logout']);
        },
        (err) => {
          alert('Error in registering');
        }
      );
    else alert('Required Fields are empty!');
  }
}
