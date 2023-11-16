import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, BehaviorSubject } from 'rxjs';
import { ERROR_AT, MAKE_LOGIN } from '../constants/constants';
import { FULL_URL, USER_LOGIN_ENDPOINT } from '../constants/enpoints';
import { auth } from '../models/user.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.isAuthenticated.next(this.isUserAuthenticated());
  }

  login(email: string | null, password: string | null): Observable<auth> {
    return this.http.post<auth>(`${FULL_URL + USER_LOGIN_ENDPOINT}`, { identifier: email, password }).pipe(
      map((response: auth) => {
        this.cookieService.set('jwtToken', response.jwt);
        this.isAuthenticated.next(true);
        return response;
      }),
      catchError((error) => {
        console.error(`${ERROR_AT} ${MAKE_LOGIN}`, error);
        throw error;
      })
    );
  }

  logout() {
    this.cookieService.delete('jwtToken');
    this.isAuthenticated.next(false);
  }

  isUserAuthenticated(): boolean {
    const jwtToken = this.cookieService.get('jwtToken');
    if (!jwtToken) {
      return false; // Não há token JWT no cookie.
    }

    const tokenData = JSON.parse(atob(jwtToken.split('.')[1])); // Decodifica o payload do token.
    const expirationTimestamp = tokenData.exp * 1000; // Converte exp para milissegundos.

    const currentTimestamp = new Date().getTime();
    if (currentTimestamp < expirationTimestamp) {
      return true; // O token é válido.
    } else {
      this.logout();
      return false; // O token expirou, não é válido.
    }
  }
}
