import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHeaderComponent } from './modal-header.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('Forms/ModalHeaderComponent', () => {
  let component: ModalHeaderComponent;
  let fixture: ComponentFixture<ModalHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHeaderComponent],
      imports: [MatDialogModule],
    });
    fixture = TestBed.createComponent(ModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
