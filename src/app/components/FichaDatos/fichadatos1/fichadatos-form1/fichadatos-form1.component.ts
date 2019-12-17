import { Component, OnInit, Inject,HostListener,ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

import { NotificationService } from '../../../../services/notificacion.service';
import { FichaDatos1Service } from '../../../../services/fichadatos1.service';

@Component({
  selector: 'app-fichadatos-form1',
  templateUrl: './fichadatos-form1.component.html',
  styleUrls: ['./fichadatos-form1.component.scss']
})
export class FichadatosForm1Component implements OnInit {

  constructor(public fichadatos1Service: FichaDatos1Service,
              private notificationService: NotificationService,
              private dialogRef: MatDialogRef<FichadatosForm1Component>,  
              @Inject(MAT_DIALOG_DATA) data) { 
              dialogRef.disableClose = false 
            }
            @HostListener('window:keyup.esc') onKeyUp() {
              this.dialogRef.close();
            }
  ngOnInit() {
  }


  onSaveFormFichaDatos1(){

    if(this.fichadatos1Service.selected.id == null){

      let newFichaDatos1=  {
    
        IDCG: this.fichadatos1Service.selected.IDCG,
        IDLOCAL: this.fichadatos1Service.selected.IDLOCAL,
        IDENT: this.fichadatos1Service.selected.IDENT,
        DNI: this.fichadatos1Service.selected.DNI,
        CODIGO: this.fichadatos1Service.selected.CODIGO,
        A1DEPA: this.fichadatos1Service.selected.A1DEPA,
        A2PROV: this.fichadatos1Service.selected.A2PROV,
        A3DISTRITO: this.fichadatos1Service.selected.A3DISTRITO,
        B1TIPO_VIA: this.fichadatos1Service.selected.B1TIPO_VIA,
        B2NOMBRE_VIA: this.fichadatos1Service.selected.B2NOMBRE_VIA,
        B3DIRECCION: this.fichadatos1Service.selected.B3DIRECCION,
        B11TELEFONO: this.fichadatos1Service.selected.B11TELEFONO,
        B12CELL: this.fichadatos1Service.selected.B12CELL,
        C1NOMBRE: this.fichadatos1Service.selected.C1NOMBRE,
        C2APELLIDOP: this.fichadatos1Service.selected.C2APELLIDOP,
        C3APELLIDOM: this.fichadatos1Service.selected.C3APELLIDOM,
        C4DNI: this.fichadatos1Service.selected.C4DNI,
        D1NOMBRE: this.fichadatos1Service.selected.C1NOMBRE,
        D2APELLIDOP: this.fichadatos1Service.selected.C2APELLIDOP,
        D3APELLIDOM: this.fichadatos1Service.selected.C3APELLIDOM,
        D4DNI: this.fichadatos1Service.selected.C4DNI,
        E1NOMBRE_ENCUES: this.fichadatos1Service.selected.E1NOMBRE_ENCUES,
        E1APELLIDO_ENCUES: this.fichadatos1Service.selected.E1APELLIDO_ENCUES,
        E1DNI_ENCUES: this.fichadatos1Service.selected.E1DNI_ENCUES,
        E2NOMBRE_SUPER: this.fichadatos1Service.selected.E2NOMBRE_SUPER,
        E2APELLIDO_SUPER: this.fichadatos1Service.selected.E2APELLIDO_SUPER,
        E2DNI_SUPER: this.fichadatos1Service.selected.E2DNI_SUPER,



        F1FECHA_PRIMERA_E: this.fichadatos1Service.selected.F1FECHA_PRIMERA_E,
        F1HORA_DESDE_E: this.fichadatos1Service.selected.F1HORA_DESDE_E,
        F1HORA_HASTA_E: this.fichadatos1Service.selected.F1HORA_HASTA_E,
        F1RESULTADO_ENCUESTA_E: this.fichadatos1Service.selected.F1RESULTADO_ENCUESTA_E,
        F1FECHA_PRIMERA_SUPER: this.fichadatos1Service.selected.F1FECHA_PRIMERA_SUPER,
        F1RESULTADO_ENCUESTA_SUPER: this.fichadatos1Service.selected.F1RESULTADO_ENCUESTA_SUPER,

        F2FECHA_PRIMERA_S: this.fichadatos1Service.selected.F2FECHA_PRIMERA_S,
        F2HORA_DESDE_S: this.fichadatos1Service.selected.F2HORA_DESDE_S,
        F2HORA_HASTA_S: this.fichadatos1Service.selected.F2HORA_HASTA_S,
        F2RESULTADO_ENCUESTA_S: this.fichadatos1Service.selected.F2RESULTADO_ENCUESTA_S,
        F2FECHA_PRIMERA_SUPER: this.fichadatos1Service.selected.F2FECHA_PRIMERA_SUPER,
        F2RESULTADO_ENCUESTA_SUPER: this.fichadatos1Service.selected.F2RESULTADO_ENCUESTA_SUPER,


        G1FECHA: this.fichadatos1Service.selected.G1FECHA,
        G2RESULTADO: this.fichadatos1Service.selected.G2RESULTADO,
        H1DNI_NINO: this.fichadatos1Service.selected.H1DNI_NINO,
        H2CARNET_CONTROLES_CRED: this.fichadatos1Service.selected.H2CARNET_CONTROLES_CRED,
        H3TRAJETA_RESULTADO: this.fichadatos1Service.selected.H3TRAJETA_RESULTADO,
        OBSERVACIONES: this.fichadatos1Service.selected.OBSERVACIONES

      }
      // console.log('New', newTramo2);

      this.fichadatos1Service.addTFichaDatos1(newFichaDatos1);

      if (this.fichadatos1Service.form.valid) {

        this.notificationService.success('Se Registro Correctamente');
      }

    }else{
      // console.log('guardar');
      this.fichadatos1Service.editFichaDatos1(this.fichadatos1Service.selected);
      this.notificationService.success('Se Actualizo Correctamente');
    }

    this.close();
    
  }
  close(): void{
    this.dialogRef.close();

  }

  onClear() {
    this.fichadatos1Service.form.reset();
    this.fichadatos1Service.initializeFormGroup();
    
  }
  

}
