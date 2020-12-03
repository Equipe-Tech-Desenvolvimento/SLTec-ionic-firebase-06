import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextatPage } from './sextat.page';

const routes: Routes = [
  {
    path: '',
    component: SextatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SextatPageRoutingModule {}
