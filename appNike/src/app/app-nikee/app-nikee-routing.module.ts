import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppNikeePage } from './app-nikee.page';

const routes: Routes = [
  {
    path: '',
    component: AppNikeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppNikeePageRoutingModule {}
