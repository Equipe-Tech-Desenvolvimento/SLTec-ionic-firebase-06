import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintatPageRoutingModule } from './quintat-routing.module';

import { QuintatPage } from './quintat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintatPageRoutingModule
  ],
  declarations: [QuintatPage]
})
export class QuintatPageModule {}
