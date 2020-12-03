import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuartametalPage } from './quartametal.page';

const routes: Routes = [
  {
    path: '',
    component: QuartametalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuartametalPageRoutingModule {}
