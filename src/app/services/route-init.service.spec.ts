import { TestBed } from '@angular/core/testing';

import { RouteInitService } from './route-init.service';
import { HttpClient } from '@angular/common/http';
import { MockService } from 'ng-mocks';

describe('RouteInitService', () => {
  let service: RouteInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RouteInitService,
        { provide: HttpClient, useValue: MockService(HttpClient) },
      ],
    });
    service = TestBed.inject(RouteInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
