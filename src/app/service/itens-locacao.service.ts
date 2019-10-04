import { Injectable } from '@angular/core';
import { ItensLocacao } from '../models/itens-locacao';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItensLocacaoService {
  private itensLocacaoCollection: AngularFirestoreCollection<ItensLocacao> = this.afs.collection('itensLocacao');

  constructor(private afs: AngularFirestore) { }


  adicionarMaterial(itensLocacao: ItensLocacao) {
    itensLocacao.id = this.afs.createId();
    return this.itensLocacaoCollection.doc(itensLocacao.id).set(itensLocacao);
  }

}
