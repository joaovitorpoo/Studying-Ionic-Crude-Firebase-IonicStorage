import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { user } from '../models/user.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {} as user;
  loading: any;

  constructor(private firebaseAuth: AngularFireAuth, private loadingController: LoadingController,private toastController: ToastController, private nav: Router) { }

  ngOnInit() {
  }

  async login(){
    await this.presentLoading();
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha);

      this.nav.navigate(['/sintomas-saude']);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async registrar(){
    await this.presentLoading();
    try {
      await this.firebaseAuth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha);

      this.presentToast("Usuario registrado com sucesso");
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Por favor, aguarde...'
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3500
    });
    toast.present();
  }
}
