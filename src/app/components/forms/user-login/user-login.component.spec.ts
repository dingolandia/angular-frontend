import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';
import { HttpClient } from '@angular/common/http';
import { MockComponent, MockService } from 'ng-mocks';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserLoginComponent,
        MockComponent(MatFormField),
        MockComponent(MatIcon),
      ],
      imports: [MatFormFieldModule, ReactiveFormsModule],
      providers: [
        { provide: HttpClient, useValue: MockService(HttpClient) },
        { provide: MatDialog, useValue: MockService(MatDialog) },
      ],
    });
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
