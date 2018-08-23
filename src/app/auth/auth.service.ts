import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

    constructor(private firebaseAuth: AngularFireAuth) { }

    signin(email: string, password: string) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signup(email: string, password: string) {
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    signout() {
        this.firebaseAuth.auth.signOut();
    }

}
