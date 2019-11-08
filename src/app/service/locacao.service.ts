import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Locacao } from '../models/locacao';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  private locacaoCollection: AngularFirestoreCollection<Locacao> = this.afs.collection('locacao');


  uidUser: string;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
  }

  getUserUid(onComplete) {
    this.auth.authState.subscribe((usuario) => {
      onComplete(usuario.uid);
    });
  }
  buscarPorId(key, onComplete) {
    let categoriaDoc = this.afs.doc<Locacao>('locacao/' + key + '');
    categoriaDoc.valueChanges()
      .pipe(take(1))
      .subscribe(locacao => {
        onComplete(locacao);
      });
  }

  buscarLocacao(onComplete) {
    this.getUserUid((userUid: string) => {
      onComplete(this.afs.collection<Locacao>('locacao', ref => ref.where('uid', '==', userUid)).valueChanges());
      console.log(userUid);
    });

  }
  adicionarLocacao(locacao: Locacao) {
    locacao.id = this.afs.createId();
    return this.locacaoCollection.doc(locacao.id).set(locacao);
  }
  updateLocacao(locacao: Locacao) {
    return this.locacaoCollection.doc(locacao.id).update(locacao);
  }

}

