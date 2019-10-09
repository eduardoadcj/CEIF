import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';
import { UsuariosService } from './service/usuarios.service';
import { Observable } from 'rxjs';
import { Usuario } from './models/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { StringOperator } from './util/string.operator';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  tipoUsuario: string;
  tipo: boolean = true;
  nomeUsuario: string;
  usuarioLogado$: Observable<Usuario>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private usuarioService: UsuariosService,
    private afAuth: AngularFireAuth,
  ) {
    this.initializeApp();
    this.afAuth.authState.subscribe((usuario) => {
      if(usuario){
        this.usuarioService.buscarPorId(usuario.uid,((usuario:Usuario)=>{
          this.nomeUsuario = StringOperator.abbreviate(usuario.nome);
          this.tipoUsuario = 'aluno';
          if(this.tipoUsuario === "aluno"){
            this.tipo = false;
          }else{
            this.tipo = true;
          }
        }));
      }
    });
   this.tipo = true;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  deslogar(){
    this.auth.deslogar();
    this.nomeUsuario = '';
  }
}
