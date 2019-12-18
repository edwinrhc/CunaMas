import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { CustomerI } from '../models/customer.interface';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { DatePipe } from '@angular/common';

export interface CustomerID extends CustomerI {   id: string; }

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
// declaramos una propiedad
  private customerColletion: AngularFirestoreCollection<CustomerI>;

  // customers: Observable<any>;
  customers: Observable<CustomerID[]>;


  // public selected = {
  //   id: null,
  //   name: '',
  //   city: '',
  //   order: ''
  // };
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
    E1A1: '',
    E1A2: '',
    E1A3: '',
    E1A4: '',
    E1A5: '',
    E1A6: '',
    E1A7: '',
    E2: '',
    E3: '',
    E4: '',
    E5: '',
    E6: '',
    F7: '',
    F8: '',
    F9: '',
    F10: '',
    F11: '',
    F12: '',
    F13: ''
  };

  
  constructor(private readonly afs: AngularFirestore) {
    // Recuperamos la data
    this.customerColletion  = afs.collection<CustomerI>('tramo1');
    this.customers = this.customerColletion.snapshotChanges()
          .pipe( map ( actions => actions.map( a => {

            const data = a.payload.doc.data() as CustomerI;
            const id = a.payload.doc.id;
            return {id, ...data};

          }))
          );

  
        }

  form: FormGroup = new FormGroup({

          id: new FormControl(null),
          IDCG:  new FormControl('', Validators.required),
          IDLOCAL:  new FormControl('', Validators.required),
          IDENT:  new FormControl('', Validators.required),
          DNI:  new FormControl('', Validators.required),
          CODIGO:  new FormControl('', Validators.required),
          FECHA_EVA:  new FormControl('', Validators.required),
          FECHA_NAC:  new FormControl('', Validators.required),
          EDAD:  new FormControl('', Validators.required),
          E1A1:  new FormControl(''),
          E1A2:  new FormControl(''),
          E1A3:  new FormControl(''),
          E1A4:  new FormControl(''),
          E1A5:  new FormControl(''),
          E1A6:  new FormControl(''),
          E1A7:  new FormControl(''),
          E2:  new FormControl(''),
          E3:  new FormControl(''),
          E4:  new FormControl(''),
          E5:  new FormControl(''),
          E6:  new FormControl(''),
          F7:  new FormControl(''),
          F8:  new FormControl(''),
          F9:  new FormControl(''),
          F10:  new FormControl(''),
          F11:  new FormControl(''),
          F12:  new FormControl(''),
          F13:  new FormControl('')

         });

  // Recupear todo los clientes
  // tslint:disable-next-line:one-line
  getAllCustomers(){
    // return all customers
    return this.customers;
  }

  // metodo para editar
  editCustomer(customer: CustomerID) {


    return this.customerColletion.doc(customer.id).update(customer);
  }

  // tslint:disable-next-line:one-line
  deleteCustomer(id: string){
    return this.customerColletion.doc(id).delete();
  }

  // tslint:disable-next-line:one-line
  addCustomer(customer: CustomerI){

    return this.customerColletion.add(customer);
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
      E1A1: '',
      E1A2: '',
      E1A3: '',
      E1A4: '',
      E1A5: '',
      E1A6: '',
      E1A7: '',
      E2: '',
      E3: '',
      E4: '',
      E5: '',
      E6: '',
      F7: '',
      F8: '',
      F9: '',
      F10: '',
      F11: '',
      F12: '',
      F13: ''
    });
  }




}
