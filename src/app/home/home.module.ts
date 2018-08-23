import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { AuthService } from '../auth/auth.service';

@NgModule({
    declarations: [
        HomeComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        AngularFireAuthModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ],
    providers: [
        AuthService
    ]
})
export class HomeModule { }
