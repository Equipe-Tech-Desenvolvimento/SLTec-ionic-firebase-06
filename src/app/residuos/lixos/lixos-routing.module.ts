import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LixosPage } from './lixos.page';

const routes: Routes = [
  {
    path: '',
    component: LixosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LixosPageRoutingModule {}
