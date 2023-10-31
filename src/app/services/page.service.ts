import { Injectable, inject } from '@angular/core';
import { Icontent } from '../models/page.interface';
import { Observable, catchError, map, of } from 'rxjs';
import { FULL_URL, PAGE_CONTENT_ENDPOINT } from '../constants/enpoints';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private pageContent: Icontent | undefined;
  private http = inject(HttpClient);

  loadPageContent(id:number): Observable<Icontent> {
    return this.http.get<{ data: Icontent[] }>(FULL_URL + PAGE_CONTENT_ENDPOINT + id).pipe(
      map((response:any) => response.data),
      catchError((error) => {
        console.error('Erro ao carregar as configurações:', error);
        return [];
      })
    );
  }

  getPageContent(id:number): Observable<Icontent> {
    if (this.pageContent) {
      return of(this.pageContent);
    } else {
      return id ? this.loadPageContent(id) : of({} as Icontent);
    }
  }
}
