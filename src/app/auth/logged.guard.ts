import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class LoggedGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.isLogged()) {
      this.router.navigate(['crm']);
      return false;
    }
    return true;
  }

}
