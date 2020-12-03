import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuintatPage } from './quintat.page';

const routes: Routes = [
  {
    path: '',
    component: QuintatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuintatPageRoutingModule {}
