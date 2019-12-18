import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';


//  Servicios
import { Tramo4Service } from '../../../services/tramo4.service';

import { ExporterService } from 'src/app/services/exporter.service';
import { FormTramo4Component } from '../form-tramo4/form-tramo4.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'listTramo4',
  templateUrl: './list-tramo4.component.html',
  styleUrls: ['./list-tramo4.component.scss']
})
export class ListTramo4Component implements OnInit {


  displayedColumns: string[] = [
    'new',
    'IDCG',
    'IDLOCAL',
    'IDENT',
    'DNI',
    'CODIGO',
    'FECHA_EVA',
    'FECHA_NAC',
    'EDAD',
    // 'H1',
    // 'H2',
    // 'H3',
    // 'H4',
    // 'H5',
    // 'H6',
    // 'H7',
    // 'H8A',
    // 'H8B',
    // 'H9',
    // 'H10',
    // 'H11',
    // 'H12',
    // 'OBSM1',
    // 'OBSM2',
    // 'OBSM3',
    // 'OBSM4',
    // 'OBSM5',
    // 'OBSH6',
    // 'OBSH7',
    'actions'
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(  private tramo4Service: Tramo4Service,
                private dialog: MatDialog,
                private excelService: ExporterService ) { }

  ngOnInit() {

    this.tramo4Service.getAllTramo4().subscribe(res => this.dataSource.data = res);

  }

  exportAsXLSX(): void {

    this.excelService.exportToExcel(this.dataSource.data, 'my_export');

  }

  exportAsXLSXFiltered(): void {

    this.excelService.exportToExcel(this.dataSource.filteredData, 'my_export');

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



    // tslint:disable-next-line:one-line
    onEdit(element?: any){

      this.onClear();
      this.openModal();
      if (element) {
        this.tramo4Service.selected = element;
      }
  
  
    }

    onAdd(element?: any){

      this.resetForm();
      this.openModal();
      if (element) {
        this.tramo4Service.selected = element;
      }
  
  
    }

    

  // tslint:disable-next-line:one-line
  onDelete(id: string){

    const confirmacion = confirm('¿estas seguro?')

    console.log('Delete', id);
    if(confirmacion){

      this.tramo4Service.deleteTramo4(id);
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
      this.dialog.open(FormTramo4Component, dialogConfig);
    }

    resetForm(): void {
    this.tramo4Service.selected.IDCG = null,
    this.tramo4Service.selected.IDLOCAL = null,
    this.tramo4Service.selected.IDENT = null,
    this.tramo4Service.selected.DNI = null,
    this.tramo4Service.selected.CODIGO = null,
    this.tramo4Service.selected.FECHA_EVA = null,
    this.tramo4Service.selected.FECHA_NAC = null,
    this.tramo4Service.selected.EDAD = null,
    this.tramo4Service.selected.H1 = null,
    this.tramo4Service.selected.H2 = null,
    this.tramo4Service.selected.H3 = null,
    this.tramo4Service.selected.H4 = null,
    this.tramo4Service.selected.H5 = null,
    this.tramo4Service.selected.H6 = null,
    this.tramo4Service.selected.H7 = null,
    this.tramo4Service.selected.H8A = null,
    this.tramo4Service.selected.H8B = null,
    this.tramo4Service.selected.H9 = null,
    this.tramo4Service.selected.H10 = null,
    this.tramo4Service.selected.H11 = null,
    this.tramo4Service.selected.H12 = null,
    this.tramo4Service.selected.OBSM1 = null,
    this.tramo4Service.selected.OBSM2 = null,
    this.tramo4Service.selected.OBSM3 = null,
    this.tramo4Service.selected.OBSM4 = null,
    this.tramo4Service.selected.OBSM5 = null,
    this.tramo4Service.selected.OBSH6 = null,
    this.tramo4Service.selected.OBSH7 = null,
           this.tramo4Service.selected.id = null
    }

    onClear() {
      this.tramo4Service.form.reset();
      this.tramo4Service.initializeFormGroup();
      this.tramo4Service.selected.id = null;
    }
}
