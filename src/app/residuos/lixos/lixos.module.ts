import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LixosPageRoutingModule } from './lixos-routing.module';

import { LixosPage } from './lixos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LixosPageRoutingModule
  ],
  declarations: [LixosPage]
})
export class LixosPageModule {}
