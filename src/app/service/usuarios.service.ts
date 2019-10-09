import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarioCollection: AngularFirestoreCollection<Usuario> = this.afs.collection('usuario');


  constructor(private afs: AngularFirestore) { }

  adicionarUsuário(usuario: Usuario,id: string) {
    usuario.id = id;
    return this.usuarioCollection.doc(usuario.id).set(usuario);
  }
  buscarPorId(key, onComplete) {
    let categoriaDoc = this.afs.doc<Usuario>('usuario/' + key + '');
    categoriaDoc.valueChanges()
      .pipe(take(1))
      .subscribe(usuario => {
        onComplete(usuario);
      });
  }

}
