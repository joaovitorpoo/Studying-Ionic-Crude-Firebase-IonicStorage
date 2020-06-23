import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SintomasSaudePageRoutingModule } from './sintomas-saude-routing.module';

import { SintomasSaudePage } from './sintomas-saude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SintomasSaudePageRoutingModule
  ],
  declarations: [SintomasSaudePage]
})
export class SintomasSaudePageModule {}
