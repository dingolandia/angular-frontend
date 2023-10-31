import { Component } from '@angular/core';
import { SERVICES_TITLE, CATALOG_TITLE, ECOMMERCE_TITLE } from 'src/app/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  serviceImage = 'assets/images/servicos.jpg';
  catalogImage = 'assets/images/catalogo.jpg';
  ecommerceImage = 'assets/images/loja.jpg';

  servicesTitle = SERVICES_TITLE;
  catalogTitle = CATALOG_TITLE;
  ecommerceTitle = ECOMMERCE_TITLE;
}
