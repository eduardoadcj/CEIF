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



@NgModule({
  declarations: [AppComponent,LoginComponent,ListCategoriaPage, RecuperarSenhaComponent,SplashComponent,AddcategoriaComponent, AddequipamentoComponent],
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RecuperarSenhaComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
