import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PessoaCronos } from '../models/pessoa.cronos';
import { Usuario } from '../models/usuario';
import { from, throwError, Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { UsuariosService } from '../service/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioCollection: AngularFirestoreCollection<Usuario> = this.afs.collection('usuario');

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController,
    private afs: AngularFirestore,
    private usuarioService: UsuariosService

  ) { }

  registrar(usuario: PessoaCronos, email: string, senha: string) {
    const usuarioCadastro: Usuario = {
      cpf: usuario.cpf,
      servidor: usuario.servidor,
      turma: 2011,
      status: 'Ativo',
      nome: usuario.nome,
      email: email,
    }
    this.afAuth.auth.createUserWithEmailAndPassword(email, senha).then((result) => {
      if(result){
        this.usuarioService.adicionarUsuário(usuarioCadastro,result.user.uid).then((result) =>{
        });
      }else{
        this.presentErroCadastroUsuario()
      }
    });    
  }

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
  async presentErroCadastroUsuario() {
    const alert = await this.alertController.create({
      header: '',
      message: '<strong>Erro ao cadastrar usuário</strong>!!!',
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
