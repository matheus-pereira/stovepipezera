import { Component } from "@angular/core";
import { UserService } from "../auth/user.service";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './crm.component.html'
})
export class CrmComponent {

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private router: Router
    ) { }

    logout() {
        this.authService.signout();
        this.userService.removeUser();
        this.router.navigate(['']);
    }
}