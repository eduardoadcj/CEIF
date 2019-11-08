import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//QRCode
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

//COMPONENTS
import { LoginComponent } from './auth/login/login.component';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ListCategoriaPage } from './equipamento/list-categoria/list-categoria.page';
import { RecuperarSenhaComponent } from './auth/recuperar-senha/recuperar-senha.component';
import { SplashComponent } from './splash/splash.component';
import { AddcategoriaComponent } from './equipamento/addcategoria/addcategoria.component';
import { AddequipamentoComponent } from './equipamento/addequipamento/addequipamento.component';
import { ListEquipamentoComponent } from './equipamento/list-equipamento/list-equipamento.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { CadastroUsuarioComponent } from './auth/cadastro-usuario/cadastro-usuario.component';
import { ValidadorCpf } from './util/validador.cpf';
import { ValidarPessoaCronosService } from './service/validar.pessoa.cronos.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { StringOperator } from './util/string.operator';
import { CadastrarAssistenteComponent } from './auth/cadastrar-assistente/cadastrar-assistente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListCategoriaPage,
    RecuperarSenhaComponent,
    SplashComponent,
    AddcategoriaComponent,
    AddequipamentoComponent,
    ListEquipamentoComponent,
    EmprestimoComponent,
    CadastroUsuarioComponent,
    CadastrarAssistenteComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    IonicSelectableModule,
    HttpClientModule,
    NgxQRCodeModule,
  ],
  providers: [

    ValidadorCpf,
    ValidarPessoaCronosService,
    HttpClient,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    StringOperator,
    RecuperarSenhaComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
