import { Component } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tipoUsuario: string = 'aluno';
  tipo: boolean = true;

  constructor(private menuController: MenuController, private alertController: AlertController) {
    if (this.tipoUsuario === "aluno") {
      this.tipo = false;
    } else {
      this.tipo = true;
    }

  }

  openFirst() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
  }
  qrcode() {
    this.mostraQrAlert();
  }
  async mostraQrAlert() {
    const alert = await this.alertController.create({
      header: '',
      message: '<img  src="http://s.glbimg.com/jo/g1/f/original/2011/05/17/qrcode.jpg" />',
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



}
