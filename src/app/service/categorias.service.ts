import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  nomeCategoria: string;

  private categoriaCollection: AngularFirestoreCollection<Categoria> = this.afs.collection('categoria');

  constructor(private afs: AngularFirestore) { }


  adicionarCategoria(categoria: Categoria) {
    categoria.id = this.afs.createId();
    return this.categoriaCollection.doc(categoria.id).set(categoria);
  }
  listarCategoria(): Observable<Categoria[]> {
    return this.categoriaCollection.valueChanges();
  }
  excluirCategoria(categoria: Categoria){
    return this.categoriaCollection.doc(categoria.id).delete();
  }
  // git salvando

  buscarPorId(key, onComplete): void {
    let categoriaDoc = this.afs.doc<Categoria>('categoria/' + key + '');
    categoriaDoc.valueChanges()
      .pipe(take(1))
      .subscribe(material => {
        onComplete(material.nome);
      });
  }

  alterarCategoria(categoria: Categoria) {
    console.log(categoria.id);
    return this.categoriaCollection.doc(categoria.id).set({
      nome: categoria.nome,
      id:categoria.id
    });




  }
}
