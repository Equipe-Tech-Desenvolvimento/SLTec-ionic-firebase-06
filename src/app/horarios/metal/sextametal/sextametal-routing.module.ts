import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextametalPage } from './sextametal.page';

const routes: Routes = [
  {
    path: '',
    component: SextametalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SextametalPageRoutingModule {}
