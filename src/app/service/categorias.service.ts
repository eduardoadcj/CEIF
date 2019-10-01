import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categoriaCollection: AngularFirestoreCollection<Categoria> = this.afs.collection('categoria');

  constructor(private afs: AngularFirestore) { }

  adicionarCategoria(categoria: Categoria){
    categoria.id = this.afs.createId();
    return this.categoriaCollection.doc(categoria.id).set(categoria);
  }
  listarCategoria(): Observable<Categoria[]>{
    return this.categoriaCollection.valueChanges();
  }
}
