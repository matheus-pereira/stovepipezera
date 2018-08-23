import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {

    isLogged() {
        return !!this.getUser();
    }

    setUser(email: string) {
        window.localStorage.setItem('user', email);
    }

    getUser() {
        return window.localStorage.getItem('user');
    }

    removeUser() {
        window.localStorage.removeItem('user');
    }

}