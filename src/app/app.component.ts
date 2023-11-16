//app.component.ts

import { Component } from '@angular/core';
import { Isettings } from './models/settings.interface';
import { SettingsService } from './services/settings.service';
import { ImainMenuItems } from './models/menu.interface';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  template: `
    <app-head [settings]="appSettings" [menuItems]="menuItems"></app-head>
    <app-contents-wrap [settings]="appSettings"></app-contents-wrap>
    <app-footer [settings]="appSettings"></app-footer>
  `,
})
export class AppComponent {
  title = 'casadinamo';
  appSettings: Isettings | undefined;
  menuItems: ImainMenuItems[] = [];

  constructor(
    private settingsService: SettingsService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.settingsService.getSettings().subscribe((data) => {
      if (data !== undefined) {
        this.appSettings = data;
      }
    });
    this.menuService.getMenu().subscribe((data) => {
      if (data !== undefined) {
        this.menuItems = data;
      }
    });
  }
}
