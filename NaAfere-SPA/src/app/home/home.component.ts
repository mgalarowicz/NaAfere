import { Component, OnInit, Input } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

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
