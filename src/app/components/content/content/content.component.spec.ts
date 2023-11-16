import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { MockComponent } from 'ng-mocks';
import { SpinnerComponent } from '../../loading/spinner/spinner.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent, MockComponent(SpinnerComponent)],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
