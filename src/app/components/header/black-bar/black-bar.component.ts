import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Isettings } from 'src/app/models/settings.interface';

@Component({
  selector: 'app-black-bar',
  templateUrl: './black-bar.component.html',
  styleUrls: ['./black-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BlackBarComponent {
  @Input() settings: Isettings | undefined;
}
