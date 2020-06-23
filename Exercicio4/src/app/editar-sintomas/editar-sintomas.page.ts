import { Component, OnInit } from '@angular/core';
import { Sintoma } from '../models/sintoma.model';
import { ListaSintomas } from '../models/listasintomas.model';
import { SaudeService } from '../services/saude.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-sintomas',
  templateUrl: './editar-sintomas.page.html',
  styleUrls: ['./editar-sintomas.page.scss'],
})
export class EditarSintomasPage implements OnInit {

  title = "Adicionar";
  model: Sintoma;
  key: string;

  constructor(private saudeService: SaudeService, private nav: Router, private activatedRoute: ActivatedRoute, private toast: ToastController) { }

  ngOnInit() {
    this.model = new Sintoma();
  }

  async ionViewWillEnter() {
    this.key = this.activatedRoute.snapshot.paramMap.get('key');
    if (this.key) {
      console.log(this.key);
      this.saudeService.get(this.key).then((data: Sintoma) => {
        this.model.data = data.data;
        this.model.descricao = data.descricao;
        this.model.intensidade = data.intensidade;
      });
      this.title = "Editar";
    }
  }

  async save() {
    await this.saveContato();
    let response;
    if (this.key) {
      response = await this.toast.create({
        message: "Contato Editado Com Sucesso",
        duration: 5000,
        position: "bottom",
      });
    } else {
      response = await this.toast.create({
        message: "Contato Salvo Com Sucesso",
        duration: 5000,
        position: "bottom",
      });
    }
    response.present();
    this.nav.navigate(['/sintomas-saude']);
  }

  async saveContato() {
    if (this.key) {
      return await this.saudeService.atualizar(this.key,this.model);
    } else {
      return await this.saudeService.inserir(this.model);
    }
  }

}
