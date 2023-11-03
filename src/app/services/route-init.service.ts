import { Injectable, inject } from '@angular/core';
import { MenuService } from './menu.service';
import { ImainMenuItems } from '../models/menu.interface';
import { ContentComponent } from '../components/content/content/content.component';
import { Router, Routes } from '@angular/router';
import { defaultRoutes } from '../default-routes';

@Injectable({
  providedIn: 'root',
})
export class RouteInitService {
  private menuService = inject(MenuService);
  private router = inject(Router);
  private menuItems: ImainMenuItems[] = [];

  private wrongWayRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404' },
  ];

  async initAsync() {
    return new Promise<Routes>((resolve, reject) => {
      this.menuService.getMenu().subscribe((data) => {
        if (data !== undefined) {
          this.menuItems = data;

          const routes: Routes = this.menuItems
            .filter((x) => x.conteudo.length > 0)
            .map((rota) => ({
              path: rota.url.replace('/', ''),
              component: ContentComponent,
              data: { htmlContent: rota.conteudo[0]?.id },
            }));

          const allRoutes = [
            ...defaultRoutes,
            ...routes,
            ...this.wrongWayRoutes,
          ];
          this.router.resetConfig(allRoutes);
          resolve(routes);
        }
      });
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }
}
