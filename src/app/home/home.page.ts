import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { LocacaoService } from '../service/locacao.service';
import { Observable } from 'rxjs';
import { Locacao } from '../models/locacao';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  locacao$: Observable<Locacao[]>;

  tipoUsuario: string = 'aluno';
  tipo: boolean = true;

  constructor(private menuController: MenuController, private alertController: AlertController, private locacaoService: LocacaoService) {
    if (this.tipoUsuario === "aluno") {
      this.tipo = false;
    } else {
      this.tipo = true;
    }

  }

  ngOnInit() {
  this.locacaoService.buscarLocacao((local$:Observable<Locacao[]>)=>{
    this.locacao$ = local$;
    console.log(local$)
   });
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
