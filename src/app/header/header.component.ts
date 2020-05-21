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
  menustatus = false;
  menuContainer = document.getElementsByClassName(
    'mobile-nav-container'
  ) as HTMLCollectionOf<HTMLElement>;
  menu = document.getElementsByClassName('mobile-nav') as HTMLCollectionOf<
    HTMLElement
  >;
  ngOnInit(): void {
    if (this.cookie.check('loggedIn'))
      this.status = this.cookie.get('loggedIn') === 'true';
  }
  openlogout() {
    this.cookie.set('loggedIn', 'false');
    this.router.navigate(['/login-logout']);
  }
  openmenu() {
    if (!this.menustatus) {
      this.menuContainer[0].style.display = 'block';
      this.menu[0].style.right = '0px';
      this.menustatus = true;
    } else {
      this.menuContainer[0].style.display = 'none';
      this.menu[0].style.right = '-500px';
      this.menustatus = false;
    }
  }
}
