//head.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlackBarComponent } from 'src/app/components/header/black-bar/black-bar.component';
import { ContainerComponent } from 'src/app/components/header/container/container.component';
import { LogoComponent } from 'src/app/components/header/logo/logo.component';
import { MenuComponent } from 'src/app/components/header/menu/menu.component';
import { MenuMobileComponent } from 'src/app/components/header/menu-mobile/menu-mobile.component';
import { HeadComponent } from 'src/app/components/header/head.component';
import { SettingsService } from 'src/app/services/settings.service';
import { RedBarComponent } from 'src/app/components/header/red-bar/red-bar.component';
import { BannerComponent } from 'src/app/components/header/banner/banner.component';
import { RouterModule } from '@angular/router';
import { UserMenuComponent } from 'src/app/components/header/user-menu/user-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BlackBarComponent,
    ContainerComponent,
    LogoComponent,
    MenuComponent,
    MenuMobileComponent,
    HeadComponent,
    RedBarComponent,
    BannerComponent,
    UserMenuComponent,
  ],
  imports: [CommonModule, RouterModule, MatMenuModule , MatButtonModule],
  providers: [SettingsService],
  exports: [HeadComponent],
})
export class HeadModule {}
