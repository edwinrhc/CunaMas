import { Component, OnInit, Inject ,HostListener,ViewChild, ElementRef} from '@angular/core';
import { Tramo3Service } from '../../../services/tramo3.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationService } from '../../../services/notificacion.service';
@Component({
  selector: 'formModalTramo3',
  templateUrl: './form-tramo3.component.html',
  styleUrls: ['./form-tramo3.component.scss']
})
export class FormTramo3Component implements OnInit {

  constructor( public tramo3: Tramo3Service,
               private notificationService: NotificationService,
               private dialogRef: MatDialogRef<FormTramo3Component>,
               @Inject(MAT_DIALOG_DATA) data) {
                dialogRef.disableClose = false;
                }
                @HostListener('window:keyup.esc') onKeyUp() {
                  this.dialogRef.close();
                }

  ngOnInit() {
  }

  onSaveFormTramo3(){

    if(this.tramo3.selected.id == null){

      let newTramo3 =  {

          IDCG: this.tramo3.selected.IDCG,
          IDLOCAL: this.tramo3.selected.IDLOCAL,
          IDENT: this.tramo3.selected.IDENT,
          DNI: this.tramo3.selected.DNI,
          CODIGO: this.tramo3.selected.CODIGO,
          FECHA_EVA: this.tramo3.selected.FECHA_EVA,
          FECHA_NAC: this.tramo3.selected.FECHA_NAC,
          EDAD: this.tramo3.selected.EDAD,
          G1A1: this.tramo3.selected.G1A1,
          G1A2: this.tramo3.selected.G1A2,
          G1A3: this.tramo3.selected.G1A3,
          G1A4: this.tramo3.selected.G1A4,
          G1A5: this.tramo3.selected.G1A5,
          G1A6: this.tramo3.selected.G1A6,
          G1A7: this.tramo3.selected.G1A7,
          G2A1: this.tramo3.selected.G2A1,
          G2B2: this.tramo3.selected.G2B2,
          G2C3: this.tramo3.selected.G2C3,
          G2D4: this.tramo3.selected.G2D4,
          G2E5: this.tramo3.selected.G2E5,
          G3: this.tramo3.selected.G3,
          G4A1: this.tramo3.selected.G4A1,
          G4B2: this.tramo3.selected.G4B2,
          G4C3: this.tramo3.selected.G4C3,
          G5: this.tramo3.selected.G5,
          G6: this.tramo3.selected.G6,
          OBSM1: this.tramo3.selected.OBSM1,
          OBSM2: this.tramo3.selected.OBSM2,
          OBSM3: this.tramo3.selected.OBSM3,
          OBSM4: this.tramo3.selected.OBSM4,
          OBSM5: this.tramo3.selected.OBSM5,
          OBSH6: this.tramo3.selected.OBSH6,
          OBSH7: this.tramo3.selected.OBSH7
      }
      // console.log('New', newTramo2);

      this.tramo3.addTramo3(newTramo3);

      if (this.tramo3.form.valid) {

        this.notificationService.success('Se Registro Correctamente');
      }
    }else{
      // console.log('guardar');
      this.tramo3.editTramo3(this.tramo3.selected);
      this.notificationService.success('Se Actualizo Correctamente');
    }

    this.close();
    
  }
  close(): void{
    this.dialogRef.close();
  }

  onClear() {
    this.tramo3.form.reset();
    this.tramo3.initializeFormGroup();
    
  }
}
