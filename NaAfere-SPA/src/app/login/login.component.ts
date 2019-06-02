import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('login success!');
    },
      error => {
        this.alertify.error(error);
    }, () => {this.router.navigate(['/games']);
  });
  }

  checkToken() {
    return this.authService.loggedIn();
    // return !!token;  // if token is not empty because of !! it will return true, otherwise it will return false
  }

}
