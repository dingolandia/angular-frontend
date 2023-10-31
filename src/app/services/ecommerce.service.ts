import { Injectable, inject } from '@angular/core';
import { IItem, IRefOptions } from '../models/shop.item.interface';
import { Observable, catchError, map } from 'rxjs';
import {
  ALL_BRANDS_ENDPOINT,
  ALL_CAR_PARTS_ENDPOINT,
  ALL_STORE_ITEMS_ENDPOINT,
  FULL_URL,
  ONE_STORE_ITEM_ENDPOINT,
} from '../constants/enpoints';
import { ERROR_FINDING, OF_STORE } from '../constants/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  constructor() {}

  private http = inject(HttpClient);

  fetchEcommerceItemsAsync(): Observable<IItem[]> {
    return this.http
      .get<{ data: IItem[] }>(FULL_URL + ALL_STORE_ITEMS_ENDPOINT)
      .pipe(
        map((response: any) => response.data),
        catchError((error) => {
          throw new Error(ERROR_FINDING + OF_STORE + error);
          return [];
        })
      );
  }

  fetchEcommerceOneItemAsync(id: number): Observable<IItem> {
    return this.http
      .get<{ data: IItem[] }>(
        FULL_URL + `${ONE_STORE_ITEM_ENDPOINT + id}?populate=*`
      )
      .pipe(
        map((response: any) => response.data),
        catchError((error) => {
          throw new Error(ERROR_FINDING + OF_STORE + error);
          return [];
        })
      );
  }

  fetchEcommerceBrandsAsync(): Observable<IRefOptions[]> {
    return this.http
      .get<{ data: IRefOptions[] }>(FULL_URL + ALL_BRANDS_ENDPOINT)
      .pipe(
        map((response: any) => response.data),
        catchError((error) => {
          throw new Error(ERROR_FINDING + OF_STORE + error);
          return [];
        })
      );
  }

  fetchEcommerceCarPartsAsync(): Observable<IRefOptions[]> {
    return this.http
      .get<{ data: IRefOptions[] }>(FULL_URL + ALL_CAR_PARTS_ENDPOINT)
      .pipe(
        map((response: any) => response.data),
        catchError((error) => {
          throw new Error(ERROR_FINDING + OF_STORE + error);
          return [];
        })
      );
  }
}
