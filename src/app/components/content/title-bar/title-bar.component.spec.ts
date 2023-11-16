import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarComponent } from './title-bar.component';
import { ActivatedRoute } from '@angular/router';
import { MockService } from 'ng-mocks';

describe('TitleBarComponent', () => {
  let component: TitleBarComponent;
  let fixture: ComponentFixture<TitleBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleBarComponent],
      providers: [
        { provide: ActivatedRoute, useValue: MockService(ActivatedRoute) },
      ],
    });
    fixture = TestBed.createComponent(TitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
