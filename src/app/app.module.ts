//app.module.ts

import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeadModule } from './modules/head/head.module';
import { ContentModule } from './modules/content/content.module';
import { FooterModule } from './modules/footer/footer.module';
import { AppComponent } from './app.component';
import { SettingsService } from './services/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductsComponent } from './pages/ecommerce/pages/products/products.component';
import { StoreComponent } from './pages/ecommerce/pages/store/store.component';
import { NavigationBarComponent } from './pages/ecommerce/components/navigation-bar/navigation-bar.component';
import { ProductDetailComponent } from './pages/ecommerce/components/product-detail/product-detail.component';
import { SearchBarComponent } from './pages/ecommerce/components/search-bar/search-bar.component';
import { ShoppingComponent } from './pages/ecommerce/components/shopping/shopping.component';
import { P404Component } from './pages/p404/p404.component';
import { RouteInitService } from './services/route-init.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from 'ngx-spinner';

export function initializeApp(routerInitService: RouteInitService) {
  return (): Promise<any> => {
    return routerInitService.initAsync();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CatalogComponent,
    ProductsComponent,
    StoreComponent,
    NavigationBarComponent,
    ProductDetailComponent,
    SearchBarComponent,
    ShoppingComponent,
    P404Component,
  ],
  imports: [
    NgxSpinnerModule,
    BrowserAnimationsModule,
    BrowserModule,
    HeadModule,
    ContentModule,
    FooterModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    RouteInitService,
    SettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [RouteInitService],
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
