import { Component, Input } from '@angular/core';
import { Isettings } from 'src/app/models/settings.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() settings: Isettings | undefined;
  public currentYear: number = new Date().getFullYear();
  public PaymentImage: string = 'assets/images/credit_cards_logos.png';
}
