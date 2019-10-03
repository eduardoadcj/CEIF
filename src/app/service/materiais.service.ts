import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Material } from '../models/material';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MateriaisService {

  private materialCollection: AngularFirestoreCollection<Material> = this.afs.collection('material');

 

  constructor(private afs: AngularFirestore) { }

  adicionarMaterial(material: Material) {
    material.id = this.afs.createId();
    return this.materialCollection.doc(material.id).set(material);
  }

  
}
