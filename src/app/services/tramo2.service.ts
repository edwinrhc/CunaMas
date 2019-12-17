import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { Tramo2I } from '../models/tramo2.interface';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { DatePipe } from '@angular/common';

export interface Tramo2ID extends Tramo2I { id?: string; }



@Injectable({
  providedIn: 'root'
})
export class Tramo2Service {

  // declaramos una propiedad
  private tramo2Colletion: AngularFirestoreCollection<Tramo2I>;
  // customers: Observable<any>;
  tramo2: Observable<Tramo2ID[]>;

  public selected = {
    id: null,
    IDCG: '',
    IDLOCAL: '',
    IDENT: '',
    DNI: '',
    CODIGO: '',
    FECHA_EVA: '',
    FECHA_NAC: '',
    EDAD: '',
    F1A1: '',
    F1A2: '',
    F1A3: '',
    F1A4: '',
    F1A5: '',
    F1A6: '',
    F1A7: '',
    F2A1: '',
    F2B2: '',
    F2C3: '',
    F2D4: '',
    F2E5: '',
    F3: '',
    F4: '',
    F5: '',
    F6: '',
    OBSM1: '',
    OBSM2: '',
    OBSM3: '',
    OBSM4: '',
    OBSM5: '',
    OBSH6: '',
    OBSH7: ''
  };

  constructor( private readonly afs: AngularFirestore) {
    // Recuperamos la data
    this.tramo2Colletion  = afs.collection<Tramo2I>('tramo2');
    this.tramo2 = this.tramo2Colletion.snapshotChanges()
          .pipe( map ( actions => actions.map(a => {

             const data = a.payload.doc.data() as Tramo2I;
             const id = a.payload.doc.id;
             return { id, ...data};

          }))
          );
   }

   form: FormGroup = new FormGroup({

      id: new FormControl(null),
      IDCG: new FormControl('', Validators.required),
      IDLOCAL: new FormControl('', Validators.required),
      IDENT: new FormControl('', Validators.required),
      DNI: new FormControl('', Validators.required),
      CODIGO: new FormControl('', Validators.required),
      FECHA_EVA: new FormControl('', Validators.required),
      FECHA_NAC: new FormControl('', Validators.required),
      EDAD: new FormControl('', Validators.required),
      F1A1: new FormControl(''),
      F1A2: new FormControl(''),
      F1A3: new FormControl(''),
      F1A4: new FormControl(''),
      F1A5: new FormControl(''),
      F1A6: new FormControl(''),
      F1A7: new FormControl(''),
      F2A1: new FormControl(''),
      F2B2: new FormControl(''),
      F2C3: new FormControl(''),
      F2D4: new FormControl(''),
      F2E5: new FormControl(''),
      F3: new FormControl(''),
      F4: new FormControl(''),
      F5: new FormControl(''),
      F6: new FormControl(''),
      OBSM1: new FormControl(''),
      OBSM2: new FormControl(''),
      OBSM3: new FormControl(''),
      OBSM4: new FormControl(''),
      OBSM5: new FormControl(''),
      OBSH6: new FormControl(''),
      OBSH7:new FormControl(''),

   });

   getAllTramo2() {

    return this.tramo2;
   }

   editTramo2(tramo2: Tramo2ID) {

    return this.tramo2Colletion.doc(tramo2.id).update(tramo2);

   }

  // tslint:disable-next-line:one-line
  deleteTramo2(id: string){
    return this.tramo2Colletion.doc(id).delete();
  }

    // tslint:disable-next-line:one-line
    addTramo2(tramo2: Tramo2ID){
      return this.tramo2Colletion.add(tramo2);
    }

initializeFormGroup() {
      this.form.setValue({
        id: null,
        IDCG: '',
        IDLOCAL: '',
        IDENT: '',
        DNI: '',
        CODIGO: '',
        FECHA_EVA: '',
        FECHA_NAC: '',
        EDAD: '',
        F1A1: '',
        F1A2: '',
        F1A3: '',
        F1A4: '',
        F1A5: '',
        F1A6: '',
        F1A7: '',
        F2A1: '',
        F2B2: '',
        F2C3: '',
        F2D4: '',
        F2E5: '',
        F3: '',
        F4: '',
        F5: '',
        F6: '',
        OBSM1: '',
        OBSM2: '',
        OBSM3: '',
        OBSM4: '',
        OBSM5: '',
        OBSH6: '',
        OBSH7: ''
      });
    }


}
