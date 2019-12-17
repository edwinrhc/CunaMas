import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { Tramo4I } from '../models/tramo4.interface';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { DatePipe } from '@angular/common';

export interface Tramo4ID extends Tramo4I { id?: string; }



@Injectable({
  providedIn: 'root'
})
export class Tramo4Service {

  // declaramos una propiedad
  private tramo4Colletion: AngularFirestoreCollection<Tramo4I>;
  // customers: Observable<any>;
  tramo4: Observable<Tramo4ID[]>;

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
    H1: '',
    H2: '',
    H3: '',
    H4: '',
    H5: '',
    H6: '',
    H7: '',
    H8A: '',
    H8B: '',
    H9: '',
    H10: '',
    H11: '',
    H12: '',
    OBSM1: '',
    OBSM2: '',
    OBSM3: '',
    OBSM4: '',
    OBSM5: '',
    OBSH6: '',
    OBSH7: ''

  };

  constructor( private readonly afs: AngularFirestore, private datePipe: DatePipe) {
    // Recuperamos la data
    this.tramo4Colletion  = afs.collection<Tramo4I>('tramo4');
    this.tramo4 = this.tramo4Colletion.snapshotChanges()
          .pipe( map ( actions => actions.map(a => {

             const data = a.payload.doc.data() as Tramo4I;
             const id = a.payload.doc.id;
             return { id, ...data};

          }))
          );
   }


   
  form: FormGroup = new FormGroup({

    id: new FormControl(null),
    IDCG:  new FormControl('', Validators.required),
    IDLOCAL: new FormControl('', Validators.required),
    IDENT:  new FormControl('', Validators.required),
    DNI:  new FormControl('', Validators.required),
    CODIGO:  new FormControl('', Validators.required),
    FECHA_EVA:  new FormControl('', Validators.required),
    FECHA_NAC:  new FormControl('', Validators.required),
    EDAD:  new FormControl('',Validators.required),
    H1:  new FormControl(''),
    H2:  new FormControl(''),
    H3:  new FormControl(''),
    H4:  new FormControl(''),
    H5:  new FormControl(''),
    H6:  new FormControl(''),
    H7:  new FormControl(''),
    H8A:  new FormControl(''),
    H8B:  new FormControl(''),
    H9:  new FormControl(''),
    H10:  new FormControl(''),
    H11:  new FormControl(''),
    H12:  new FormControl(''),
    OBSM1:  new FormControl(''),
    OBSM2:  new FormControl(''),
    OBSM3:  new FormControl(''),
    OBSM4:  new FormControl(''),
    OBSM5:  new FormControl(''),
    OBSH6:  new FormControl(''),
    OBSH7:  new FormControl('')
    });

   getAllTramo4() {

    return this.tramo4;
   }

 

  // tslint:disable-next-line:one-line
  deleteTramo4(id: string){
    return this.tramo4Colletion.doc(id).delete();
  }

    // tslint:disable-next-line:one-line
    addTramo4(tramo4: Tramo4ID){
      return  this.tramo4Colletion.add(tramo4);
    }

  editTramo4(tramo4: Tramo4ID) {

    return this.tramo4Colletion.doc(tramo4.id).update(tramo4);

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
      H1: '',
      H2: '',
      H3: '',
      H4: '',
      H5: '',
      H6: '',
      H7: '',
      H8A: '',
      H8B: '',
      H9: '',
      H10: '',
      H11: '',
      H12: '',
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
