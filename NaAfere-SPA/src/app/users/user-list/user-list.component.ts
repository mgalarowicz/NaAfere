import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  user: User = JSON.parse(localStorage.getItem('user'));
  cityList = [{value: 'Kraków', display: 'Kraków'}, {value: 'Warszawa', display: 'Warszawa'}, {value: 'Wrocław', display: 'Wrocław'},
              {value: 'Gdańsk', display: 'Gdańsk'}, {value: 'Katowice', display: 'Katowice'}];
  userParams: any = {};
  pagination: Pagination;

  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.data.subscribe(data => {
    this.users = data.users.result;
    this.pagination = data.users.pagination;
});

  this.userParams.city = this.user.city;
  this.userParams.minAge = 10;
  this.userParams.maxAge = 99;
}

pageChanged(event: any): void {
  this.pagination.currentPage = event.page;
  this.loadUsers();
}

resetFilters() {
  this.userParams.city = this.user.city;
  this.userParams.minAge = 10;
  this.userParams.maxAge = 99;
  this.loadUsers();
}

loadUsers() {
  this.userService
    .getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
    .subscribe(
      (res: PaginatedResult<User[]>) => {
        this.users = res.result;
        this.pagination = res.pagination;
      },
      error => {
        this.alertify.error(error);
      }
    );
}

}
