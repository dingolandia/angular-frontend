import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from 'src/app/components/content/content/content.component';
import { TitleBarComponent } from 'src/app/components/content/title-bar/title-bar.component';
import { ContentsWrapComponent } from 'src/app/components/content/contents.wrap.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from 'src/app/components/loading/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingService } from 'src/app/services/loading.service';

@NgModule({
  declarations: [ContentComponent, TitleBarComponent, ContentsWrapComponent, SpinnerComponent,],
  imports: [CommonModule, RouterModule, NgxSpinnerModule],
  exports: [ContentsWrapComponent],
  providers: [LoadingService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentModule {}
