import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuintametalPage } from './quintametal.page';

const routes: Routes = [
  {
    path: '',
    component: QuintametalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuintametalPageRoutingModule {}
