import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercamadeiraPageRoutingModule } from './tercamadeira-routing.module';

import { TercamadeiraPage } from './tercamadeira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercamadeiraPageRoutingModule
  ],
  declarations: [TercamadeiraPage]
})
export class TercamadeiraPageModule {}
