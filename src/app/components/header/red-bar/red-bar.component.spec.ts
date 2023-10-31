import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBarComponent } from './red-bar.component';

describe('RedBarComponent', () => {
  let component: RedBarComponent;
  let fixture: ComponentFixture<RedBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedBarComponent]
    });
    fixture = TestBed.createComponent(RedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
