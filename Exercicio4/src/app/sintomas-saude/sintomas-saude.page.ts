import { Component, OnInit } from '@angular/core';
import { Sintoma } from '../models/sintoma.model';
import { ListaSintomas } from '../models/listasintomas.model';
import { SaudeService } from '../services/saude.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sintomas-saude',
  templateUrl: './sintomas-saude.page.html',
  styleUrls: ['./sintomas-saude.page.scss'],
})
export class SintomasSaudePage implements OnInit {

  sintomas: ListaSintomas[];

  constructor(private saudeService: SaudeService, private nav: Router, private toast: ToastController) { }

  async ionViewWillEnter() {
    this.sintomas = await this.saudeService.getAll();
  }

  ngOnInit() {
  }

  addSintoma(){
    this.nav.navigate(['/editar-sintomas']);
  }

  editarSintoma(sintomaKey: ListaSintomas) {    
    let urlRota = '/editar-sintomas/'+sintomaKey.key;
    this.nav.navigate([urlRota]);
  }

  async removerSintoma(sintomaKey: ListaSintomas) {
    await this.saudeService.deletar(sintomaKey.key);
    let indice = this.sintomas.indexOf(sintomaKey);
    this.sintomas.splice(indice, 1);
    let response = await this.toast.create({
      message: "Sintoma deletado com sucesso",
      duration: 5000
    });
    response.present();
  }
}
