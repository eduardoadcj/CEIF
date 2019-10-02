import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Material } from '../models/material';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MateriaisService {

 

  constructor(private afs: AngularFirestore) { }



  
}
