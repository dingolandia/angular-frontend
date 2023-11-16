import { TestBed } from '@angular/core/testing';

import { MenuItemsResolverService } from './menu-items-resolver.service';
import { HttpClient } from '@angular/common/http';
import { MockService } from 'ng-mocks';

describe('MenuItemsResolverService', () => {
  let service: MenuItemsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MenuItemsResolverService,
        { provide: HttpClient, useValue: MockService(HttpClient) },
      ],
    });
    service = TestBed.inject(MenuItemsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
