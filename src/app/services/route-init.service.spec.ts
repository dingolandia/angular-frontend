import { TestBed } from '@angular/core/testing';

import { RouteInitService } from './route-init.service';

describe('RouteInitService', () => {
  let service: RouteInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
