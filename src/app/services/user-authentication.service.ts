import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { ERROR_AT, MAKE_LOGIN } from '../constants/constants';
import { FULL_URL, USER_LOGIN_ENDPOINT } from '../constants/enpoints';
import { auth } from '../models/user.interface';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(email: string | null, password: string | null):Observable<auth> {
    return this.http.post<auth>(`${FULL_URL + USER_LOGIN_ENDPOINT}`, { identifier:email, password }).pipe(
      map((response: auth) =>{
        this.cookieService.put('jwtToken', response.jwt);
        return response}),
      catchError((error) => {
        console.error(`${ERROR_AT} ${MAKE_LOGIN}`, error);
        throw error;
      })
    );
  }
}
