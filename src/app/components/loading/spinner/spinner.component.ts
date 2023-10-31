import { Component, Input, inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() isLoading: boolean = false;

  private spinner = inject(NgxSpinnerService);

  ngOnInit(): void {
    if (this.isLoading) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }
}
