import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SintomasSaudePage } from './sintomas-saude.page';

const routes: Routes = [
  {
    path: '',
    component: SintomasSaudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SintomasSaudePageRoutingModule {}
