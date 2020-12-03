import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouroPage } from './couro.page';

const routes: Routes = [
  {
    path: '',
    component: CouroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouroPageRoutingModule {}
