import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent, MockService } from 'ng-mocks';
import { RedBarComponent } from './red-bar.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { MatDialog } from '@angular/material/dialog';

describe('RedBarComponent', () => {
  let component: RedBarComponent;
  let fixture: ComponentFixture<RedBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedBarComponent, MockComponent(UserMenuComponent)],
      providers: [{ provide: MatDialog, useValue: MockService(MatDialog) }],
    });
    fixture = TestBed.createComponent(RedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
