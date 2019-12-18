import { Component, OnInit,ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';

// Servicios
import { FichaDatos1Service } from '../../../../services/fichadatos1.service';
import { ExporterService } from '../../../../services/exporter.service';

import { FichadatosForm1Component } from '../fichadatos-form1/fichadatos-form1.component';


@Component({
  selector: 'app-list-fichadatos1',
  templateUrl: './list-fichadatos1.component.html',
  styleUrls: ['./list-fichadatos1.component.scss']
})
export class ListFichadatos1Component implements OnInit {

displayedColumns: string[] = [

    'new',
    'IDCG',
    'IDLOCAL',
    'IDENT',
    'DNI',
    'CODIGO',
    'actions'
  ];

  dataSource = new MatTableDataSource();
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor( private fichadato1Service: FichaDatos1Service,
               private dialog: MatDialog,
               private excelService: ExporterService) { }

  ngOnInit() {

    this.fichadato1Service.getAllFichaDatos1().subscribe(res => this.dataSource.data = res);
  }

  exportAsXLSX() : void {

    this.excelService.exportToExcel(this.dataSource.data,'my_export');
  }

  exportAsXLSXFiltered(): void {

    this.excelService.exportToExcel(this.dataSource.filteredData,'my_export');
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
    // tslint:disable-next-line:one-line
    onEdit(element?: any){

      this.onClear();
      this.openModal();
      if (element) {
        this.fichadato1Service.selected = element;
      }
  
  
    }

    onAdd(element?: any){

      this.resetForm();
      this.openModal();
      if (element) {
        this.fichadato1Service.selected = element;
      }
  
  
    }

    
  // tslint:disable-next-line:one-line
  onDelete(id: string){

    const confirmacion = confirm('¿estas seguro?')

    console.log('Delete', id);
    if(confirmacion){

      this.fichadato1Service.deleteFichaDatos1(id);
    }
    //  Llamar al service y al metodo delete


  }

  
    // tslint:disable-next-line:one-line
    openModal(): void{
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        title: 'Modal'
      };
      dialogConfig.autoFocus = true;
      this.dialog.open(FichadatosForm1Component, dialogConfig);
    }

    resetForm(): void {
      
      this.fichadato1Service.selected.IDCG = null,
      this.fichadato1Service.selected.IDLOCAL = null,
      this.fichadato1Service.selected.IDENT = null,
      this.fichadato1Service.selected.DNI = null,
      this.fichadato1Service.selected.CODIGO = null,
      this.fichadato1Service.selected.A1DEPA = null,
      this.fichadato1Service.selected.A2PROV = null,
      this.fichadato1Service.selected.A3DISTRITO = null,
      this.fichadato1Service.selected.B1TIPO_VIA = null,
      this.fichadato1Service.selected.B2NOMBRE_VIA = null,
      this.fichadato1Service.selected.B3DIRECCION = null,
      this.fichadato1Service.selected.B10REFERENCIA = null,
      this.fichadato1Service.selected.B11TELEFONO = null,
      this.fichadato1Service.selected.B12CELL = null,
      this.fichadato1Service.selected.C1NOMBRE = null,
      this.fichadato1Service.selected.C2APELLIDOP = null,
      this.fichadato1Service.selected.C3APELLIDOM = null,
      this.fichadato1Service.selected.C4DNI = null,
      this.fichadato1Service.selected.D1NOMBRE = null,
      this.fichadato1Service.selected.D2APELLIDOP = null,
      this.fichadato1Service.selected.D3APELLIDOM = null,
      this.fichadato1Service.selected.D4DNI = null,
      this.fichadato1Service.selected.E1NOMBRE_ENCUES = null,
      this.fichadato1Service.selected.E1APELLIDO_ENCUES = null,
      this.fichadato1Service.selected.E1DNI_ENCUES = null,
      this.fichadato1Service.selected.E2NOMBRE_SUPER = null,
      this.fichadato1Service.selected.E2APELLIDO_SUPER = null,
      this.fichadato1Service.selected.E2DNI_SUPER = null,
      this.fichadato1Service.selected.F1FECHA_PRIMERA_E = null,
      this.fichadato1Service.selected.F1HORA_DESDE_E = null,
      this.fichadato1Service.selected.F1HORA_HASTA_E = null,
      this.fichadato1Service.selected.F1RESULTADO_ENCUESTA_E = null,
      this.fichadato1Service.selected.F1FECHA_PRIMERA_SUPER = null,
      this.fichadato1Service.selected.F1RESULTADO_ENCUESTA_SUPER = null,
      
      this.fichadato1Service.selected.F2FECHA_PRIMERA_S = null,
      this.fichadato1Service.selected.F2HORA_DESDE_S = null,
      this.fichadato1Service.selected.F2HORA_HASTA_S = null,
      this.fichadato1Service.selected.F2RESULTADO_ENCUESTA_S = null,
      this.fichadato1Service.selected.F2FECHA_PRIMERA_SUPER = null,
      this.fichadato1Service.selected.F2RESULTADO_ENCUESTA_SUPER = null,
      
      this.fichadato1Service.selected.G1FECHA = null,
      this.fichadato1Service.selected.G2RESULTADO = null,
      this.fichadato1Service.selected.H1DNI_NINO = null,
      this.fichadato1Service.selected.H2CARNET_CONTROLES_CRED = null,
      this.fichadato1Service.selected.RESULTADO_TARJETA = null,
      this.fichadato1Service.selected.OBSERVACIONES = null,
        
      this.fichadato1Service.selected.id  = null
    }
  

    onClear() {
      this.fichadato1Service.form.reset();
      this.fichadato1Service.initializeFormGroup();
      this.fichadato1Service.selected.id = null;
    }

}
