import { Component, OnInit, Input } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUrl: string;

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('loged out');
  }

  checkToken() {
    const token = localStorage.getItem('token');
    return !!token;  // if token is not empty because of !! it will return true, otherwise it will return false
  }

}
