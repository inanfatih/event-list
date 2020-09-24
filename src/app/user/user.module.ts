import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  declarations: [ProfileComponent],
})
export class UserModule {}
