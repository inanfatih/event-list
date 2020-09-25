import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName;
  password;
  mouseoverLogin = false;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(form): void {
    this.auth.loginUser(form.value.userName, form.value.password);
    this.router.navigate(['/events']);
    console.log('form', form);
    console.log('form.controls', form.controls);
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
