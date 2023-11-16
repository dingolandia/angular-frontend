import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';
import { MockComponent } from 'ng-mocks';
import { ShoppingComponent } from '../../components/shopping/shopping.component';
import { IItem } from 'src/app/models/shop.item.interface';
import { RouterTestingModule } from '@angular/router/testing';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreComponent, ShoppingComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const mockItem: IItem = {
      id: 1,
      tituloProduto: 'Título',
      preco: 11.11,
      quantidadeMinima: 1,
      descricao: 'Descrição',
      loja_categoria_aplicacao: {
        id: 1,
        descricao: 'Descrição',
      },
      loja_marca: {
        id: 1,
        descricao: 'Descrição',
      },
      loja_peca: {
        id: 1,
        descricao: 'Descrição',
      },
      opcional: {
        id: 1,
        descricao: 'Descrição',
      },
    };

    // Setando o valor mockado
    component.itemShop = mockItem;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
