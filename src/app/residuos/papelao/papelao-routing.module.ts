import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PapelaoPage } from './papelao.page';

const routes: Routes = [
  {
    path: '',
    component: PapelaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapelaoPageRoutingModule {}
