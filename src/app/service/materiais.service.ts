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

  listarMaterial(): Observable<Material[]> {
    return this.materialCollection.valueChanges();
  }
  buscarLista() {
    let materialDoc = this.afs.doc<Material>('material');
    return materialDoc.valueChanges();
  }

  
}
