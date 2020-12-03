import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TercamadeiraPage } from './tercamadeira.page';

const routes: Routes = [
  {
    path: '',
    component: TercamadeiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TercamadeiraPageRoutingModule {}
