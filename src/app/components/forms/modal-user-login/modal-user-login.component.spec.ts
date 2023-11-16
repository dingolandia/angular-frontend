import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserLoginComponent } from './modal-user-login.component';
import { MockComponent, MockService } from 'ng-mocks';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginComponent } from '../user-login/user-login.component';

describe('ModalUserLoginComponent', () => {
  let component: ModalUserLoginComponent;
  let fixture: ComponentFixture<ModalUserLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalUserLoginComponent,
        MockComponent(ModalHeaderComponent),
        MockComponent(UserLoginComponent),
      ],
      providers: [{ provide: MatDialog, useValue: MockService(MatDialog) }],
    });
    fixture = TestBed.createComponent(ModalUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
