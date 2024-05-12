import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppNikeePageRoutingModule } from './app-nikee-routing.module';

import { AppNikeePage } from './app-nikee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppNikeePageRoutingModule
  ],
  declarations: [AppNikeePage]
})
export class AppNikeePageModule {}
