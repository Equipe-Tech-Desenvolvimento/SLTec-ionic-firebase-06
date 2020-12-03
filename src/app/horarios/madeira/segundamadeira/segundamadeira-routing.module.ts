import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundamadeiraPage } from './segundamadeira.page';

const routes: Routes = [
  {
    path: '',
    component: SegundamadeiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundamadeiraPageRoutingModule {}
