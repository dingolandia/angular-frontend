import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  logoImage:string = 'assets/images/logo-casadinamo.png';
  logoAlt:string = 'Casa Dinamo';
}
