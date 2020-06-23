import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarSintomasPage } from './editar-sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: EditarSintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarSintomasPageRoutingModule {}
