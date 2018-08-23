import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../auth/user.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    signinForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.signinForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    signin() {
        const email = this.signinForm.get('email').value;
        const password = this.signinForm.get('password').value;
        this.authService
            .signin(email, password)
            .then(() => {
                this.userService.setUser(email);
                this.router.navigate(['crm']);
            })
            .catch((error) => {
                console.log(error);
                alert('Usuário e/ou senha incorreto!');
            });
    }

}
