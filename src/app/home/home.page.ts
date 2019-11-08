import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { LocacaoService } from '../service/locacao.service';
import { Observable } from 'rxjs';
import { Locacao } from '../models/locacao';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuariosService } from '../service/usuarios.service';
import { Usuario } from '../models/usuario';
import { QRCodeScanner } from '../util/qrcode.scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  qrData = null;
  createdCode = null;

  locacao$: Observable<Locacao[]>;

  tipo: boolean = true;

  constructor(
    private menuController: MenuController,
    private alertController: AlertController,
    private locacaoService: LocacaoService,
    private afAuth: AngularFireAuth,
    private usuarioService: UsuariosService,
    private barcodeScanner: BarcodeScanner
  ) {
    this.afAuth.authState.subscribe((usuario) => {
      if (usuario) {
        this.usuarioService.buscarPorId(usuario.uid, ((usuario: Usuario) => {
          if (usuario != null) {
            this.tipo = false;
          }
        }));
      }
    });
  }
  createCode(id: string) {
    console.log('Id da locação' + id);
    this.qrData = id;
    this.createdCode = this.qrData;
  }

  ngOnInit() {
    this.locacaoService.buscarLocacao((local$: Observable<Locacao[]>) => {
      this.locacao$ = local$;
    });
  }

  openFirst() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
  }

  scanner() {
    this.barcodeScanner.scan().then(barcode => {
      this.locacaoService.buscarPorId(barcode.text, (locacao: Locacao) => {
        if (locacao.status === 'Pendente') {
          const dispLocacao: Locacao = {
            id: locacao.id,
            dataDevolucao: locacao.dataDevolucao,
            dataLocacao: locacao.dataLocacao,
            itensLocacao: locacao.itensLocacao,
            lid: locacao.lid,
            uid: locacao.uid,
            status: 'Emprestado',
          }
          this.locacaoService.updateLocacao(dispLocacao);
        } else if (locacao.status === 'Emprestado') {
          const dispLocacao: Locacao = {
            id: locacao.id,
            dataDevolucao: locacao.dataDevolucao,
            dataLocacao: locacao.dataLocacao,
            itensLocacao: locacao.itensLocacao,
            lid: locacao.lid,
            uid: locacao.uid,
            status: 'Devolvido',
          }
          this.locacaoService.updateLocacao(dispLocacao);
        }
      })
    });
  }

  // qrcode() {
  //   this.mostraQrAlert();
  // }
  // async mostraQrAlert() {
  //   const alert = await this.alertController.create({
  //     header: '',
  //     message: '<ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>',
  //     buttons: [
  //       {
  //         text: 'Fechar',
  //         handler: () => {
  //           console.log('Confirm Okay');
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }



}
