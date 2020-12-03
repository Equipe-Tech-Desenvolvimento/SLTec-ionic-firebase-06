import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuartapPage } from './quartap.page';

const routes: Routes = [
  {
    path: '',
    component: QuartapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuartapPageRoutingModule {}
