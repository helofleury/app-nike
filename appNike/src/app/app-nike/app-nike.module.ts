import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppNikePageRoutingModule } from './app-nike-routing.module';

import { AppNikePage } from './app-nike.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppNikePageRoutingModule
  ],
  declarations: [AppNikePage]
})
export class AppNikePageModule {}
