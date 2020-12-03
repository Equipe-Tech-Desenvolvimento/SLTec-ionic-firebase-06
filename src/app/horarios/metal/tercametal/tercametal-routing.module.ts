import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TercametalPage } from './tercametal.page';

const routes: Routes = [
  {
    path: '',
    component: TercametalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TercametalPageRoutingModule {}
