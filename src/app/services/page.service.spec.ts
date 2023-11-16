import { TestBed } from '@angular/core/testing';

import { PageService } from './page.service';
import { HttpClient } from '@angular/common/http';
import { MockService } from 'ng-mocks';

describe('PageService', () => {
  let service: PageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PageService,
        { provide: HttpClient, useValue: MockService(HttpClient) },
      ],
    });
    service = TestBed.inject(PageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
