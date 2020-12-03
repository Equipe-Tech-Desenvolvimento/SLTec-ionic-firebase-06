import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintamadeiraPageRoutingModule } from './quintamadeira-routing.module';

import { QuintamadeiraPage } from './quintamadeira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintamadeiraPageRoutingModule
  ],
  declarations: [QuintamadeiraPage]
})
export class QuintamadeiraPageModule {}
