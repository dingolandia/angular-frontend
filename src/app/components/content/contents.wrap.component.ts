import { Component, Input } from '@angular/core';
import { Isettings } from 'src/app/models/settings.interface';

@Component({
  selector: 'app-contents-wrap',
  template: `
    <app-title-bar />
    <app-content [htmlContent]="htmlContent"></app-content>
  `,
})
export class ContentsWrapComponent {
  @Input() settings: Isettings | undefined;
  @Input() titleText: string | undefined ;
  @Input() htmlContent: string | undefined;
}
