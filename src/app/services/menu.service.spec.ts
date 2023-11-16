import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { MockService } from 'ng-mocks';
import { HttpClient } from '@angular/common/http';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MenuService,
        { provide: HttpClient, useValue: MockService(HttpClient) },
      ],
    });
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
