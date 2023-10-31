import { inject } from '@angular/core';
import { MenuService } from './menu.service';
import { Resolve } from '@angular/router';
import { ImainMenuItems } from '../models/menu.interface';
import { Observable } from 'rxjs';

export class MenuItemsResolverService implements Resolve<ImainMenuItems[]> {
  private menuService = inject(MenuService);

  resolve():
    | ImainMenuItems[]
    | Observable<ImainMenuItems[]>
    | Promise<ImainMenuItems[]> {
    return this.menuService.getMenu();
  }
}
