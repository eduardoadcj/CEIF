import { Injectable } from '@angular/core';
import { Assistente } from '../models/assistente';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AssistenteService {

  private usuarioCollection: AngularFirestoreCollection<Assistente> = this.afs.collection('assistente');

  constructor(
    private afs: AngularFirestore,
  ) { }

  adicionarAssistente(assistente: Assistente, id: string) {
    assistente.id = id;
    return this.usuarioCollection.doc(assistente.id).set(assistente);
  }
}
