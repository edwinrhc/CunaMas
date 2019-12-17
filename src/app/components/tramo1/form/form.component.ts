import { Component, OnInit, Inject,HostListener,ViewChild, ElementRef  } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationService } from '../../../services/notificacion.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'formModal',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor( public customer: CustomerService,
                private notificationService: NotificationService,
               private dialogRef: MatDialogRef<FormComponent>,
               @Inject(MAT_DIALOG_DATA) data) { 
                dialogRef.disableClose = false;
               }
               @HostListener('window:keyup.esc') onKeyUp() {
                this.dialogRef.close();
              }

  ngOnInit() {
  }

  onSaveForm(){

    if (this.customer.selected.id == null){
      
      let newCustomer = {


        IDCG : this.customer.selected.IDCG, 
        IDLOCAL : this.customer.selected.IDLOCAL,
        IDENT : this.customer.selected.IDENT,
        DNI : this.customer.selected.DNI,
        CODIGO : this.customer.selected.CODIGO,
        FECHA_EVA : this.customer.selected.FECHA_EVA,
        FECHA_NAC : this.customer.selected.FECHA_NAC,
        EDAD : this.customer.selected.EDAD,
        E1A1 : this.customer.selected.E1A1,
        E1A2 : this.customer.selected.E1A2,
        E1A3 : this.customer.selected.E1A3,
        E1A4 : this.customer.selected.E1A4,
        E1A5 : this.customer.selected.E1A5,
        E1A6 : this.customer.selected.E1A6,
        E1A7 : this.customer.selected.E1A7,
        E2 : this.customer.selected.E2,
        E3 : this.customer.selected.E3,
        E4 : this.customer.selected.E4,
        E5 : this.customer.selected.E5,
        E6 : this.customer.selected.E6,
        F7 : this.customer.selected.F7,
        F8 : this.customer.selected.F8,
        F9 : this.customer.selected.F9,
        F10 : this.customer.selected.F10,
        F11 : this.customer.selected.F11,
        F12 : this.customer.selected.F12,
        F13 : this.customer.selected.F13
      }

      // console.log('New',newCustomer);
      // TODO: call method
      this.customer.addCustomer(newCustomer);

      if (this.customer.form.valid) {

        this.notificationService.success('Se Registro Correctamente');
      }
    }else{

      // console.log('guardar');
      this.customer.editCustomer(this.customer.selected);
      this.notificationService.success('Se Actualizo Correctamente');
    }
    this.close();
    
  
  }
  close(): void{
      this.dialogRef.close();
    }
    onClear() {
      this.customer.form.reset();
      this.customer.initializeFormGroup();
      
    }
    
}
