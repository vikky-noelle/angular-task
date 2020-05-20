import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private cookie: CookieService, private router: Router) {}
  status: boolean;
  ngOnInit(): void {
    if (this.cookie.check('loggedIn'))
      this.status = this.cookie.get('loggedIn') === 'true';
  }
  openlogout() {
    this.cookie.set('loggedIn', 'false');
    this.router.navigate(['/login-logout']);
  }
}
