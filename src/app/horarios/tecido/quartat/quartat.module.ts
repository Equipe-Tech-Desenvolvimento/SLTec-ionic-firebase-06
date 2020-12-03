import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartatPageRoutingModule } from './quartat-routing.module';

import { QuartatPage } from './quartat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartatPageRoutingModule
  ],
  declarations: [QuartatPage]
})
export class QuartatPageModule {}
