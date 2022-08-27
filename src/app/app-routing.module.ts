import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { AuthLoginGuard } from './authGuards/auth-login.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PasswordChangeSuccessComponent } from './password-change-success/password-change-success.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'password-change-success', component: PasswordChangeSuccessComponent },


  // { path: 'user', component: BoardUserComponent },
  // { path: 'mod', component: BoardModeratorComponent },
  // { path: 'admin', component: BoardAdminComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'user',canActivate:[AuthLoginGuard] ,
      children: [
                  //CATEGORY
                  { path: '', component: BoardUserComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
