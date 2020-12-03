import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TercacouroPage } from './tercacouro.page';

const routes: Routes = [
  {
    path: '',
    component: TercacouroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TercacouroPageRoutingModule {}
