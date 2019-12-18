import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';

import { FichaDatos1I} from '../models/fichadatos1.interface';

import { FormGroup, FormControl, Validators } from "@angular/forms";

import { DatePipe } from '@angular/common';

export interface FichaDatos1ID extends FichaDatos1I { id?: string; }



@Injectable({
  providedIn: 'root'
})
export class FichaDatos1Service {

  // declaramos una propiedad
  private fichaDatos1Colletion: AngularFirestoreCollection<FichaDatos1I>;
  // customers: Observable<any>;
  fichaDatos1: Observable<FichaDatos1ID[]>;

  public selected = {

    id: null,
    IDCG:'',
    IDLOCAL:'',
    IDENT:'',
    DNI:'',
    CODIGO:'',
    A1DEPA:'',
    A2PROV:'',
    A3DISTRITO:'',
    B1TIPO_VIA:'',
    B2NOMBRE_VIA:'',
    B3DIRECCION:'',
    B10REFERENCIA:'',
    B11TELEFONO:'',
    B12CELL:'',
    C1NOMBRE:'',
    C2APELLIDOP:'',
    C3APELLIDOM:'',
    C4DNI:'',
    D1NOMBRE:'',
    D2APELLIDOP:'',
    D3APELLIDOM:'',
    D4DNI:'',
    E1NOMBRE_ENCUES:'',
    E1APELLIDO_ENCUES:'',
    E1DNI_ENCUES:'',
    E2NOMBRE_SUPER:'',
    E2APELLIDO_SUPER:'',
    E2DNI_SUPER:'',
    F1FECHA_PRIMERA_E:'',
    F1HORA_DESDE_E:'',
    F1HORA_HASTA_E:'',
    F1RESULTADO_ENCUESTA_E:'',
    F1FECHA_PRIMERA_SUPER:'',
    F1RESULTADO_ENCUESTA_SUPER:'',
    F2FECHA_PRIMERA_S:'',
    F2HORA_DESDE_S:'',
    F2HORA_HASTA_S:'',
    F2RESULTADO_ENCUESTA_S:'',
    F2FECHA_PRIMERA_SUPER:'',
    F2RESULTADO_ENCUESTA_SUPER:'',
    G1FECHA:'',
    G2RESULTADO:'',
    H1DNI_NINO:'',
    H2CARNET_CONTROLES_CRED:'',
    RESULTADO_TARJETA:'',
    OBSERVACIONES:''
  };

  constructor( private readonly afs: AngularFirestore, private datePipe: DatePipe) {
    // Recuperamos la data
    this.fichaDatos1Colletion  = afs.collection<FichaDatos1I>('fichadatos');
    this.fichaDatos1 = this.fichaDatos1Colletion.snapshotChanges()
          .pipe( map ( actions => actions.map(a => {

             const data = a.payload.doc.data() as FichaDatos1I;
             const id = a.payload.doc.id;
             return { id, ...data};

          }))
          );
   }


   
  form: FormGroup = new FormGroup({

    id: new FormControl(null),  
    IDCG:new FormControl('',Validators.required),
    IDLOCAL:new FormControl('',Validators.required),
    IDENT:new FormControl('',Validators.required),
    DNI:new FormControl('',Validators.required),
    CODIGO:new FormControl('',Validators.required),
    A1DEPA:new FormControl(''),
    A2PROV:new FormControl(''),
    A3DISTRITO:new FormControl(''),
    B1TIPO_VIA:new FormControl(''),
    B2NOMBRE_VIA:new FormControl(''),
    B3DIRECCION:new FormControl(''),
    B10REFERENCIA:new FormControl(''),
    B11TELEFONO:new FormControl(''),
    B12CELL:new FormControl(''),
    C1NOMBRE:new FormControl(''),
    C2APELLIDOP:new FormControl(''),
    C3APELLIDOM:new FormControl(''),
    C4DNI:new FormControl(''),
    D1NOMBRE:new FormControl(''),
    D2APELLIDOP:new FormControl(''),
    D3APELLIDOM:new FormControl(''),
    D4DNI:new FormControl(''),
    E1NOMBRE_ENCUES:new FormControl(''),
    E1APELLIDO_ENCUES:new FormControl(''),
    E1DNI_ENCUES:new FormControl(''),
    E2NOMBRE_SUPER:new FormControl(''),
    E2APELLIDO_SUPER:new FormControl(''),
    E2DNI_SUPER:new FormControl(''),
    F1FECHA_PRIMERA_E:new FormControl(''),
    F1HORA_DESDE_E:new FormControl(''),
    F1HORA_HASTA_E:new FormControl(''),
    F1RESULTADO_ENCUESTA_E:new FormControl(''),
    F1FECHA_PRIMERA_SUPER:new FormControl(''),
    F1RESULTADO_ENCUESTA_SUPER:new FormControl(''),
    F2FECHA_PRIMERA_S:new FormControl(''),
    F2HORA_DESDE_S:new FormControl(''),
    F2HORA_HASTA_S:new FormControl(''),
    F2RESULTADO_ENCUESTA_S:new FormControl(''),
    F2FECHA_PRIMERA_SUPER:new FormControl(''),
    F2RESULTADO_ENCUESTA_SUPER:new FormControl(''),
    G1FECHA:new FormControl(''),
    G2RESULTADO:new FormControl(''),
    H1DNI_NINO:new FormControl(''),
    H2CARNET_CONTROLES_CRED:new FormControl(''),
    RESULTADO_TARJETA:new FormControl(''),
    OBSERVACIONES:new FormControl('')

    });

   getAllFichaDatos1() {

    return this.fichaDatos1;
   }

 

  // tslint:disable-next-line:one-line
  deleteFichaDatos1(id: string){
    return this.fichaDatos1Colletion.doc(id).delete();
  }

    // tslint:disable-next-line:one-line
    addTFichaDatos1(fichaDatos1: FichaDatos1ID){
      return  this.fichaDatos1Colletion.add(fichaDatos1);
    }

    editFichaDatos1(fichaDatos1: FichaDatos1ID) {

    return this.fichaDatos1Colletion.doc(fichaDatos1.id).update(fichaDatos1);

   }

   initializeFormGroup() {
    this.form.setValue({

      id: null,
      IDCG:'',
      IDLOCAL:'',
      IDENT:'',
      DNI:'',
      CODIGO:'',
      A1DEPA:'',
      A2PROV:'',
      A3DISTRITO:'',
      B1TIPO_VIA:'',
      B2NOMBRE_VIA:'',
      B3DIRECCION:'',
      B10REFERENCIA:'',
      B11TELEFONO:'',
      B12CELL:'',
      C1NOMBRE:'',
      C2APELLIDOP:'',
      C3APELLIDOM:'',
      C4DNI:'',
      D1NOMBRE:'',
      D2APELLIDOP:'',
      D3APELLIDOM:'',
      D4DNI:'',
      E1NOMBRE_ENCUES:'',
      E1APELLIDO_ENCUES:'',
      E1DNI_ENCUES:'',
      E2NOMBRE_SUPER:'',
      E2APELLIDO_SUPER:'',
      E2DNI_SUPER:'',
      F1FECHA_PRIMERA_E:'',
      F1HORA_DESDE_E:'',
      F1HORA_HASTA_E:'',
      F1RESULTADO_ENCUESTA_E:'',
      F1FECHA_PRIMERA_SUPER:'',
      F1RESULTADO_ENCUESTA_SUPER:'',
      F2FECHA_PRIMERA_S:'',
      F2HORA_DESDE_S:'',
      F2HORA_HASTA_S:'',
      F2RESULTADO_ENCUESTA_S:'',
      F2FECHA_PRIMERA_SUPER:'',
      F2RESULTADO_ENCUESTA_SUPER:'',
      G1FECHA:'',
      G2RESULTADO:'',
      H1DNI_NINO:'',
      H2CARNET_CONTROLES_CRED:'',
      RESULTADO_TARJETA:'',
      OBSERVACIONES:''
      
    });
  }


}
