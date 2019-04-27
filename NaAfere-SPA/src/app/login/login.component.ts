import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('login success!');
    },
      error => {console.log(error);
    });
  }

  checkToken() {
    const token = localStorage.getItem('token');
    return !!token;  // if token is not empty because of !! it will return true, otherwise it will return false
  }

}
