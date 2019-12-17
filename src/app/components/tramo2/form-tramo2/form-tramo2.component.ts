import { Component, OnInit, Inject,HostListener,ViewChild, ElementRef  } from '@angular/core';
import { Tramo2Service } from '../../../services/tramo2.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationService } from '../../../services/notificacion.service';

@Component({
  selector: 'formModalTramo2',
  templateUrl: './form-tramo2.component.html',
  styleUrls: ['./form-tramo2.component.scss']
})
export class FormTramo2Component implements OnInit {

  constructor( public tramo2: Tramo2Service,
              private notificationService: NotificationService,
               private dialogRef: MatDialogRef<FormTramo2Component>,
               @Inject(MAT_DIALOG_DATA) data) { 
                dialogRef.disableClose = false;
               }
               @HostListener('window:keyup.esc') onKeyUp() {
                this.dialogRef.close();
              }

  ngOnInit() {
  }

  onSaveFormTramo2(){

    if(this.tramo2.selected.id == null){

      let newTramo2 =  {

        IDCG: this.tramo2.selected.IDCG,
        IDLOCAL: this.tramo2.selected.IDLOCAL,
        IDENT: this.tramo2.selected.IDENT,
        DNI: this.tramo2.selected.DNI,
        CODIGO: this.tramo2.selected.CODIGO,
        FECHA_EVA: this.tramo2.selected.FECHA_EVA,
        FECHA_NAC: this.tramo2.selected.FECHA_NAC,
        EDAD: this.tramo2.selected.EDAD,
        F1A1: this.tramo2.selected.F1A1,
        F1A2: this.tramo2.selected.F1A2,
        F1A3: this.tramo2.selected.F1A3,
        F1A4: this.tramo2.selected.F1A4,
        F1A5: this.tramo2.selected.F1A5,
        F1A6: this.tramo2.selected.F1A6,
        F1A7: this.tramo2.selected.F1A7,
        F2A1: this.tramo2.selected.F2A1,
        F2B2: this.tramo2.selected.F2B2,
        F2C3: this.tramo2.selected.F2C3,
        F2D4: this.tramo2.selected.F2D4,
        F2E5: this.tramo2.selected.F2E5,
        F3: this.tramo2.selected.F3,
        F4: this.tramo2.selected.F4,
        F5: this.tramo2.selected.F5,
        F6: this.tramo2.selected.F6,
        OBSM1: this.tramo2.selected.OBSM1,
        OBSM2: this.tramo2.selected.OBSM2,
        OBSM3: this.tramo2.selected.OBSM3,
        OBSM4: this.tramo2.selected.OBSM4,
        OBSM5: this.tramo2.selected.OBSM5,
        OBSH6: this.tramo2.selected.OBSH6,
        OBSH7: this.tramo2.selected.OBSH7
      }
      // console.log('New', newTramo2);

      this.tramo2.addTramo2(newTramo2);

      if (this.tramo2.form.valid) {

        this.notificationService.success('Se Registro Correctamente');
      }
    }else{
      // console.log('guardar');
      this.tramo2.editTramo2(this.tramo2.selected);
      this.notificationService.success('Se Actualizo Correctamente');
    }

    this.close();
    
  }
  close(): void{
    this.dialogRef.close();
  }

  onClear() {
    this.tramo2.form.reset();
    this.tramo2.initializeFormGroup();
    
  }

}
