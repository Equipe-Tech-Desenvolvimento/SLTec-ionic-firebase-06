import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadeiraPage } from './madeira.page';

const routes: Routes = [
  {
    path: '',
    component: MadeiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadeiraPageRoutingModule {}
