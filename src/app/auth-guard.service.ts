import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth_service: AuthenticationService, private router: Router) {}

  canActivate() {
    if (!this.auth_service.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  };
}