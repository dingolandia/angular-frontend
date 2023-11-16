import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';
import { LoadingService } from 'src/app/services/loading.service';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerModule } from 'ngx-spinner';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(() => {
    const loadingServiceSpy = jasmine.createSpyObj('LoadingService', [
      'loading$',
    ]);
    const loadingSubject = new BehaviorSubject<boolean>(false);
    loadingServiceSpy.loading$ = loadingSubject.asObservable();

    TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      providers: [{ provide: LoadingService, useValue: loadingServiceSpy }],
      imports: [NgxSpinnerModule],
    });

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
