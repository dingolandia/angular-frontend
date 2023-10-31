import { Component, Input } from '@angular/core';
import { ImainMenuItems } from 'src/app/models/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menuItems: ImainMenuItems[] = [];
}
