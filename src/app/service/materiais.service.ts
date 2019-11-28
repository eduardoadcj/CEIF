import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Material } from '../models/material';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MateriaisService {

  private materialCollection: AngularFirestoreCollection<Material> = this.afs.collection('material');

  material: Material[];

  constructor(private afs: AngularFirestore) { }

  adicionarMaterial(material: Material) {
    material.id = this.afs.createId();
    return this.materialCollection.doc(material.id).set(material);
  }
  alterarMaterial(material: Material) {
    return this.materialCollection.doc(material.id).update(material);
  }

  excluir(material: Material){
    return this.materialCollection.doc(material.id).delete();

  }
  listarMaterial(): Observable<Material[]> {
    return this.materialCollection.valueChanges();
  }
  buscarLista() {
    let materialDoc = this.afs.doc<Material>('material');
    return materialDoc.valueChanges();
  }
  buscarMateriaCategoria(key): Observable<Material[]>{
    return this.afs.collection<Material>('material', ref => ref.where('categoria.id','==',key)).valueChanges();
  }

  
}
