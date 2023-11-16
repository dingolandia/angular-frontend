import { TestBed } from '@angular/core/testing';

import { UserAuthenticationService } from './user-authentication.service';
import { HttpClient } from '@angular/common/http';
import { MockService } from 'ng-mocks';

describe('UserAuthenticationService', () => {
  let service: UserAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserAuthenticationService,
        { provide: HttpClient, useValue: MockService(HttpClient) },
      ],
    });
    service = TestBed.inject(UserAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
