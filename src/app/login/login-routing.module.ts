import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../../routeGuard/auth-guard.service';
import { AuthService } from '../../routeGuard/auth.service';
import { LoginComponent }       from './login.component';
 
const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}