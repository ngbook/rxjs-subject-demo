import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

export const TOKEN_NAME = 'user-token';
export const LOGIN_URL = 'http://xxx';

@Injectable()
export class AuthService {

    constructor(private http: Http) {}

    loginSubject = new BehaviorSubject<boolean>(this.checkToken());

    hasLoggedIn() {
        return this.loginSubject.asObservable();
    }
    login(name: string, pwd: string): Observable<any> {
        return this.http.post(LOGIN_URL, {
            name, pwd
        }).map((rsp: any) => {
            if (!rsp.code) { // 登录成功
                this.loginSubject.next(true);
            }
            return rsp;
        });
    }

    logout() {
        this.loginSubject.next(false);
    }

    private checkToken() {
        const token = localStorage.getItem(TOKEN_NAME);
        // 这里可以对 token 做些简单的处理
        return !!token;
    }
}
