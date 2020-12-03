import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundatPage } from './segundat.page';

const routes: Routes = [
  {
    path: '',
    component: SegundatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundatPageRoutingModule {}
