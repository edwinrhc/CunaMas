import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { Tramo3I } from '../models/tramo3.interface';
import { FormGroup, FormControl, Validators } from "@angular/forms";



export interface Tramo3ID extends Tramo3I { id?: string; }



@Injectable({
  providedIn: 'root'
})
export class Tramo3Service {

  // declaramos una propiedad
  private tramo3Colletion: AngularFirestoreCollection<Tramo3I>;
  // customers: Observable<any>;
  tramo3: Observable<Tramo3ID[]>;

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
    G1A1: '',
    G1A2: '',
    G1A3: '',
    G1A4: '',
    G1A5: '',
    G1A6: '',
    G1A7: '',
    G2A1: '',
    G2B2: '',
    G2C3: '',
    G2D4: '',
    G2E5: '',
    G3: '',
    G4A1: '',
    G4B2: '',
    G4C3: '',
    G5: '',
    G6: '',
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
    this.tramo3Colletion  = afs.collection<Tramo3I>('tramo3');
    this.tramo3 = this.tramo3Colletion.snapshotChanges()
          .pipe( map ( actions => actions.map(a => {

             const data = a.payload.doc.data() as Tramo3I;
             const id = a.payload.doc.id;
             return { id, ...data};

          }))
          );
   }

   form: FormGroup = new FormGroup({

      id: new FormControl(null),
      IDCG: new FormControl('', Validators.required),
      IDLOCAL:new FormControl('', Validators.required),
      IDENT: new FormControl('', Validators.required),
      DNI: new FormControl('', Validators.required),
      CODIGO: new FormControl('', Validators.required),
      FECHA_EVA: new FormControl('', Validators.required),
      FECHA_NAC: new FormControl('', Validators.required),
      EDAD: new FormControl('', Validators.required),
      G1A1: new FormControl(''),
      G1A2: new FormControl(''),
      G1A3: new FormControl(''),
      G1A4: new FormControl(''),
      G1A5: new FormControl(''),
      G1A6: new FormControl(''),
      G1A7: new FormControl(''),
      G2A1: new FormControl(''),
      G2B2: new FormControl(''),
      G2C3: new FormControl(''),
      G2D4: new FormControl(''),
      G2E5: new FormControl(''),
      G3: new FormControl(''),
      G4A1: new FormControl(''),
      G4B2: new FormControl(''),
      G4C3: new FormControl(''),
      G5: new FormControl(''),
      G6: new FormControl(''),
      OBSM1: new FormControl(''),
      OBSM2: new FormControl(''),
      OBSM3: new FormControl(''),
      OBSM4: new FormControl(''),
      OBSM5: new FormControl(''),
      OBSH6: new FormControl(''),
      OBSH7: new FormControl('')
    });

   getAllTramo3() {

    return this.tramo3;
   }

   editTramo3(tramo3: Tramo3ID) {

    return this.tramo3Colletion.doc(tramo3.id).update(tramo3);

   }

  // tslint:disable-next-line:one-line
  deleteTramo3(id: string){
    return this.tramo3Colletion.doc(id).delete();
  }

    // tslint:disable-next-line:one-line
    addTramo3(tramo3: Tramo3ID){
      return this.tramo3Colletion.add(tramo3);
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
        G1A1: '',
        G1A2: '',
        G1A3: '',
        G1A4: '',
        G1A5: '',
        G1A6: '',
        G1A7: '',
        G2A1: '',
        G2B2: '',
        G2C3: '',
        G2D4: '',
        G2E5: '',
        G3: '',
        G4A1: '',
        G4B2: '',
        G4C3: '',
        G5: '',
        G6: '',
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
