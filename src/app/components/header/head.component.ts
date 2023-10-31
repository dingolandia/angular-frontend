import { Component, Input } from '@angular/core';
import { ImainMenuItems } from 'src/app/models/menu.interface';
import { Isettings } from 'src/app/models/settings.interface';

@Component({
  selector: 'app-head',
  template: `
    <app-black-bar [settings]="settings" />
    <app-container>
      <app-logo />
      <app-menu [menuItems]="menuItems" />
      <app-menu-mobile />
    </app-container>
    <app-red-bar />
    <app-banner />
  `,
})
export class HeadComponent {
  @Input() settings: Isettings | undefined;
  @Input() menuItems: ImainMenuItems[] = [];
}
