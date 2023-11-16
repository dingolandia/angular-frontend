import { TestBed } from '@angular/core/testing';

import { EcommerceService } from './ecommerce.service';
import { HttpClient } from '@angular/common/http';
import { MockService } from 'ng-mocks';

describe('EcommerceService', () => {
  let service: EcommerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EcommerceService,
        { provide: HttpClient, useValue: MockService(HttpClient) },
      ],
    });
    service = TestBed.inject(EcommerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
