import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextacouroPage } from './sextacouro.page';

const routes: Routes = [
  {
    path: '',
    component: SextacouroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SextacouroPageRoutingModule {}
