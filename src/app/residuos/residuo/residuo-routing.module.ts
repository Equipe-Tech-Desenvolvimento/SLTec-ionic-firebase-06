import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResiduoPage } from './residuo.page';

const routes: Routes = [
  {
    path: '',
    component: ResiduoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResiduoPageRoutingModule {}
