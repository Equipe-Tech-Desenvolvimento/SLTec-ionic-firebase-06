import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundacouroPage } from './segundacouro.page';

const routes: Routes = [
  {
    path: '',
    component: SegundacouroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundacouroPageRoutingModule {}
