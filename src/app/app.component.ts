//app.component.ts

import { Component, inject } from '@angular/core';
import { Isettings } from './models/settings.interface';
import { SettingsService } from './services/settings.service';
import { ImainMenuItems } from './models/menu.interface';
import { MenuService } from './services/menu.service';
import { Router } from '@angular/router';
import { ContentComponent } from './components/content/content/content.component';
import { P404Component } from './pages/p404/p404.component';

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

  private settingsService = inject(SettingsService);
  private menuService = inject(MenuService);
  private router = inject(Router);

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
