import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuartamadeiraPage } from './quartamadeira.page';

const routes: Routes = [
  {
    path: '',
    component: QuartamadeiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuartamadeiraPageRoutingModule {}
