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


  login(email,senha){
    return this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then((result) => {
        this.router.navigateByUrl('/home');
      }).catch(() => {
        this.presentEmailSenhaIncorretos();
      })
  }



  // ALERTS
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
