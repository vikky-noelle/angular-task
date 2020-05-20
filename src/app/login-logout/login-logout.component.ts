import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.css'],
})
export class LoginLogoutComponent implements OnInit {
  constructor(private router: Router) {}
  interval;
  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.router.navigate(['/']);
    }, 1000);
  }
}
