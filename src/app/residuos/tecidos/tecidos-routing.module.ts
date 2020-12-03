import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecidosPage } from './tecidos.page';

const routes: Routes = [
  {
    path: '',
    component: TecidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecidosPageRoutingModule {}
