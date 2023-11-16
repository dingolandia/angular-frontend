import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';
import { MockService } from 'ng-mocks';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SettingsService,
        { provide: HttpClient, useValue: MockService(HttpClient) },
      ],
    });
    service = TestBed.inject(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
