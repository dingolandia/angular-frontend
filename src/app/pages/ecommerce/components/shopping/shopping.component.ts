import { Component, Input } from '@angular/core';
import { FULL_URL } from 'src/app/constants/enpoints';
import { IItem } from 'src/app/models/shop.item.interface';
import { currencyFormat } from 'src/app/utils/formatter';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
  @Input() preco: number = 0;
  @Input() itemTitle: string = 'Título';
  @Input() itemShop: IItem | undefined;

  currencyFormat = currencyFormat;
  fullUrl = FULL_URL;
  ngOnInit(): void {

  }

}
