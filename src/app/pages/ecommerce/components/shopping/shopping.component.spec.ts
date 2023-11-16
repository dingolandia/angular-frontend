import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingComponent } from './shopping.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Pages/Ecommerce/Components/ShoppingComponent', () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
