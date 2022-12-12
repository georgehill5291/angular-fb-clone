import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'george_auth';
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private http: HttpClient) {
    this._isLoggedIn$.next(!!this.token);
  }


  login(username: string, password: string) {
    return this.http.post('http://georgedev.net/api/auth/login', { username, password })
    .pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.data.accessToken);
      })
    );;
  }
}
