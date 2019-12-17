import { Component, OnInit, Inject,HostListener,ViewChild, ElementRef   } from '@angular/core';
import { Tramo4Service } from '../../../services/tramo4.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationService } from '../../../services/notificacion.service';


@Component({
  selector: 'formModalTramo4',
  templateUrl: './form-tramo4.component.html',
  styleUrls: ['./form-tramo4.component.scss']
})
export class FormTramo4Component implements OnInit {

  constructor( public tramo4: Tramo4Service,
              private notificationService: NotificationService,
                
               private dialogRef: MatDialogRef<FormTramo4Component>,
               @Inject(MAT_DIALOG_DATA) data) {
                dialogRef.disableClose = false;
                }
                @HostListener('window:keyup.esc') onKeyUp() {
                  this.dialogRef.close();
                }
  @ViewChild('btnClose',{static:true}) btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveFormtramo4(){

    if(this.tramo4.selected.id == null){

      let newTramo4 =  {

      IDCG: this.tramo4.selected.IDCG,
      IDLOCAL: this.tramo4.selected.IDLOCAL,
      IDENT: this.tramo4.selected.IDENT,
      DNI: this.tramo4.selected.DNI,
      CODIGO: this.tramo4.selected.CODIGO,
      FECHA_EVA: this.tramo4.selected.FECHA_EVA,
      FECHA_NAC: this.tramo4.selected.FECHA_NAC,
      EDAD: this.tramo4.selected.EDAD,
      H1: this.tramo4.selected.H1,
      H2: this.tramo4.selected.H2,
      H3: this.tramo4.selected.H3,
      H4: this.tramo4.selected.H4,
      H5: this.tramo4.selected.H5,
      H6: this.tramo4.selected.H6,
      H7: this.tramo4.selected.H7,
      H8A: this.tramo4.selected.H8A,
      H8B: this.tramo4.selected.H8B,
      H9: this.tramo4.selected.H9,
      H10: this.tramo4.selected.H10,
      H11: this.tramo4.selected.H11,
      H12: this.tramo4.selected.H12,
      OBSM1: this.tramo4.selected.OBSM1,
      OBSM2: this.tramo4.selected.OBSM2,
      OBSM3: this.tramo4.selected.OBSM3,
      OBSM4: this.tramo4.selected.OBSM4,
      OBSM5: this.tramo4.selected.OBSM5,
      OBSH6: this.tramo4.selected.OBSH6,
      OBSH7: this.tramo4.selected.OBSH7

      }
      // console.log('New', newTramo2);

      this.tramo4.addTramo4(newTramo4);

      if (this.tramo4.form.valid) {

        this.notificationService.success('Se Registro Correctamente');
      }

    }else{
      // console.log('guardar');
      this.tramo4.editTramo4(this.tramo4.selected);
      this.notificationService.success('Se Actualizo Correctamente');
    }

    this.close();
    
  }
  close(): void{
    this.dialogRef.close();

  }

  onClear() {
    this.tramo4.form.reset();
    this.tramo4.initializeFormGroup();
    
  }

}
