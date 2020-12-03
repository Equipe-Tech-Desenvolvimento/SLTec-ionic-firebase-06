import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetaisPage } from './metais.page';

const routes: Routes = [
  {
    path: '',
    component: MetaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetaisPageRoutingModule {}
