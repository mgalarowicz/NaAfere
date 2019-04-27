import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    console.log('loged out');
  }

  checkToken() {
    const token = localStorage.getItem('token');
    return !!token;  // if token is not empty because of !! it will return true, otherwise it will return false
  }

}
