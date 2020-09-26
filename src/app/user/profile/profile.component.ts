import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  profileForm: FormGroup;
  firstName = new FormControl();
  lastName = new FormControl();

  ngOnInit(): void {
    this.firstName = new FormControl(
      this.auth.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );

    this.lastName = new FormControl(
      this.auth.currentUser.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  saveProfile(formValues): void {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }
  validateFirstName(): any {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): any {
    return this.lastName.valid || this.lastName.untouched;
  }
}
