import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecidosPageRoutingModule } from './tecidos-routing.module';

import { TecidosPage } from './tecidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecidosPageRoutingModule
  ],
  declarations: [TecidosPage]
})
export class TecidosPageModule {}
