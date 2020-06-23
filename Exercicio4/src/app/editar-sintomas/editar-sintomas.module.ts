import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarSintomasPageRoutingModule } from './editar-sintomas-routing.module';

import { EditarSintomasPage } from './editar-sintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarSintomasPageRoutingModule
  ],
  declarations: [EditarSintomasPage]
})
export class EditarSintomasPageModule {}
