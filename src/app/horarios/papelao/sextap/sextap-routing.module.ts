import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextapPage } from './sextap.page';

const routes: Routes = [
  {
    path: '',
    component: SextapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SextapPageRoutingModule {}
