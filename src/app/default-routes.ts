import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StoreComponent } from './pages/ecommerce/pages/store/store.component';
import { ProductsComponent } from './pages/ecommerce/pages/products/products.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { P404Component } from './pages/p404/p404.component';
import { UserLoginComponent } from './components/forms/user-login/user-login.component';

export const defaultRoutes: Routes = [
  {
    path: 'home',
    component: ContentComponent,
    data: { componentContent: HomeComponent },
  },
  {
    path: 'contato',
    component: ContentComponent,
    data: { componentContent: ContactComponent },
  },
  {
    path: 'loja',
    component: ContentComponent,
    data: { componentContent: StoreComponent },
  },
  {
    path: 'produto/:id',
    component: ContentComponent,
    data: { componentContent: ProductsComponent },
  },
  {
    path: 'catalogo',
    component: ContentComponent,
    data: { componentContent: CatalogComponent },
  },
  {
    path: 'login',
    component: ContentComponent,
    data: { componentContent: UserLoginComponent },
  },
  {
    path: '404',
    component: ContentComponent,
    data: { componentContent: P404Component },
  },
];
