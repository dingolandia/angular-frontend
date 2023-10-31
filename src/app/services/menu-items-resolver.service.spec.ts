import { TestBed } from '@angular/core/testing';

import { MenuItemsResolverService } from './menu-items-resolver.service';

describe('MenuItemsResolverService', () => {
  let service: MenuItemsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
