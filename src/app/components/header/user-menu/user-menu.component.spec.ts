import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuComponent } from './user-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { MockService } from 'ng-mocks';
import { HttpClient } from '@angular/common/http';

describe('Header/UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMenuComponent],
      providers: [
        { provide: MatDialog, useValue: MockService(MatDialog) },
        { provide: HttpClient, useValue: MockService(HttpClient) },
      ],
    });
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
