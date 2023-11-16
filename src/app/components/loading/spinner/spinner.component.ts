import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  constructor(
    private spinner: NgxSpinnerService,
    private loadingService: LoadingService,
  ) {
    loadingService.loading$.subscribe((loadingStatus) => {
      if (loadingStatus) {
        spinner.show();
      } else {
        spinner.hide();
      }
    });
  }
}
