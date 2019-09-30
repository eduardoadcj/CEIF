import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController,

  ) { }


  login(email, senha) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then((result) => {
        this.router.navigate(['/home']);
      }).catch(() => {
        this.presentEmailSenhaIncorretos();
      })
  }
  deslogar() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }

  recuperarSenha(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then((result) => {
        this.presentRecuperarSenha();
        this.router.navigate(['/login']);
      }).catch(() => {
        this.presentEmailSenhaIncorretos();
      })
  }



  // ALERTS
  async presentRecuperarSenha() {
    const alert = await this.alertController.create({
      header: '',
      message: '<strong>E-mail enviado com sucesso</strong>!!!',
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
  async presentErroRecuperarSenha() {
    const alert = await this.alertController.create({
      header: '',
      message: '<strong>Erro ao enviar e-mail</strong>!!!',
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentEmailSenhaIncorretos() {
    const alert = await this.alertController.create({
      header: '',
      message: '<strong>Email ou senha invalidos</strong>!!!',
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
  //FIM ALERTS
}
