import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { Sintoma } from '../models/sintoma.model';
import { ListaSintomas } from '../models/listasintomas.model';

@Injectable({
  providedIn: 'root'
})
export class SaudeService {

  constructor(private storage: Storage, private dataPipe: DatePipe) { }

  public inserir(sintoma: Sintoma) {
    let key = this.dataPipe.transform(new Date(), 'ddMMyyyyHHmmss');
    return this.save(key, sintoma);
  }

  public deletar (key: string) {
    return this.storage.remove(key);
  }

  public atualizar (key: string, sintoma: Sintoma) {
    return this.save(key,sintoma);
  }

  public get (key: string) {
    return this.storage.get(key);
  }

  public getAll() {
    let sintomas: ListaSintomas[] = [];
    return this.storage.forEach(
      (value: Sintoma, key: string, interationNumber: Number) => {
        let sintoma = new ListaSintomas();
        sintoma.key = key;
        sintoma.sintoma = value;
        sintomas.push(sintoma);
      }).then( () => {
        return Promise.resolve(sintomas);
      }).catch( (error) => {
        return Promise.reject(error);
      });
  }
  
  public save(key: string, sintoma: Sintoma) {
    this.storage.set(key, sintoma);
  }
}
