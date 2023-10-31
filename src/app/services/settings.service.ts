import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FULL_URL, SETTINGS_ENDPOINT } from '../constants/enpoints';
import { Isettings } from '../models/settings.interface';

export class SettingsService {
  private settings: Isettings | undefined;

  private http = inject(HttpClient);

  loadSettings(): Observable<Isettings> {
    return this.http.get<{ data: Isettings }>(FULL_URL + SETTINGS_ENDPOINT).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.error('Erro ao carregar as configurações:', error);
        return [];
      })
    );
  }

  getSettings(): Observable<Isettings | undefined> {
    if (this.settings) {
      return of(this.settings);
    } else {
      return this.loadSettings();
    }
  }
}
