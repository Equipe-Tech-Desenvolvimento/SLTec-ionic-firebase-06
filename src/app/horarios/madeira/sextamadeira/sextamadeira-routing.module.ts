import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextamadeiraPage } from './sextamadeira.page';

const routes: Routes = [
  {
    path: '',
    component: SextamadeiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SextamadeiraPageRoutingModule {}
