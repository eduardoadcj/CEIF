import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Locacao } from '../models/locacao';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  private locacaoCollection: AngularFirestoreCollection<Locacao> = this.afs.collection('locacao');


  uidUser: string;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) { 
  }

  getUserUid(onComplete){
    this.auth.authState.subscribe((usuario) => {
      onComplete(usuario.uid);
    });
  }


  buscarLocacao(onComplete){
    this.getUserUid((userUid:string)=>{
      onComplete (this.afs.collection<Locacao>('locacao', ref => ref.where('uid','==',userUid)).valueChanges());
      console.log(userUid);
    }); 
    
  }
  adicionarLocacao(locacao: Locacao) {
    locacao.id = this.afs.createId();
    return this.locacaoCollection.doc(locacao.id).set(locacao);
  }
}

