import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  user: User;
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;  // thanks to Partial we automaticly set all props to be optional

  constructor(private authService: AuthService, private alertify: AlertifyService,
              private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-default',
      dateInputFormat: 'YYYY-MM-DD',
      adaptivePosition: true
    },
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(7),
                      Validators.required,
                      Validators.pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/))]],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['male'],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['']
    }, {validators: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {mismatch: true};
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.alertify.success('Registration successful');
      }, error => {
        this.alertify.error(error);
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/games']);
        });
      });
    }
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  cancel() {
    console.log('cancelled');
  }

}
