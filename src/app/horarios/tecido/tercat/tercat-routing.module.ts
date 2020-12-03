import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TercatPage } from './tercat.page';

const routes: Routes = [
  {
    path: '',
    component: TercatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TercatPageRoutingModule {}
