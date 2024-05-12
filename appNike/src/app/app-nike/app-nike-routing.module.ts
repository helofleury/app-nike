import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppNikePage } from './app-nike.page';

const routes: Routes = [
  {
    path: '',
    component: AppNikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppNikePageRoutingModule {}
