import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBarComponent } from './black-bar.component';

describe('BlackBarComponent', () => {
  let component: BlackBarComponent;
  let fixture: ComponentFixture<BlackBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackBarComponent]
    });
    fixture = TestBed.createComponent(BlackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
