import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IUser;
  constructor() {}

  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'Fatih',
      lastName: 'Inan',
    };
  }
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
