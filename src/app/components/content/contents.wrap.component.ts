import { Component, Input, Type } from '@angular/core';
import { Isettings } from 'src/app/models/settings.interface';

@Component({
  selector: 'app-contents-wrap',
  template: `
    <app-title-bar [title]="titleText" />
    <app-content [htmlContent]="htmlContent" [componentContent]="componentContent"></app-content>
  `,
})
export class ContentsWrapComponent {
  @Input() settings: Isettings | undefined;
  @Input() titleText: string | undefined;
  @Input() htmlContent: string | undefined;
  @Input() componentContent: any | undefined;
}
