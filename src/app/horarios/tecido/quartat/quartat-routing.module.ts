import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuartatPage } from './quartat.page';

const routes: Routes = [
  {
    path: '',
    component: QuartatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuartatPageRoutingModule {}
