import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';


//  Servicios
import { Tramo3Service } from '../../../services/tramo3.service';

import { ExporterService } from 'src/app/services/exporter.service';
import { FormTramo3Component } from '../form-tramo3/form-tramo3.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'listTramo3',
  templateUrl: './list-tramo3.component.html',
  styleUrls: ['./list-tramo3.component.scss']
})
export class ListTramo3Component implements OnInit {


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
    // 'G1A1',
    // 'G1A2',
    // 'G1A3',
    // 'G1A4',
    // 'G1A5',
    // 'G1A6',
    // 'G1A7',
    // 'G2A1',
    // 'G2B2',
    // 'G2C3',
    // 'G2D4',
    // 'G2E5',
    // 'G3',
    // 'G4A1',
    // 'G4B2',
    // 'G4C3',
    // 'G5',
    // 'G6',
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

  constructor(  private tramo3Service: Tramo3Service,
                private dialog: MatDialog,
                private excelService: ExporterService ) { }

  ngOnInit() {

    this.tramo3Service.getAllTramo3().subscribe(res => this.dataSource.data = res);

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
        // console.log('Editar', element);
  
        this.tramo3Service.selected = element;
      }
  
  
    }

    onAdd(element?: any){

      this.resetForm();
      this.openModal();
      if (element) {
        this.tramo3Service.selected = element;
      }
  
  
    }

    

  // tslint:disable-next-line:one-line
  onDelete(id: string){

    const confirmacion = confirm('¿estas seguro?')

    console.log('Delete', id);
    if(confirmacion){

      this.tramo3Service.deleteTramo3(id);
    }

  }
  


    // tslint:disable-next-line:one-line
    openModal(): void{
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        title: 'Modal'
      };
      dialogConfig.autoFocus = true;
      this.dialog.open(FormTramo3Component, dialogConfig);
    }

    resetForm(): void {

      this.tramo3Service.selected.IDCG = null,
      this.tramo3Service.selected.IDLOCAL = null,
      this.tramo3Service.selected.IDENT = null,
      this.tramo3Service.selected.DNI = null,
      this.tramo3Service.selected.CODIGO = null,
      this.tramo3Service.selected.FECHA_EVA = null,
      this.tramo3Service.selected.FECHA_NAC = null,
      this.tramo3Service.selected.EDAD = null,
      this.tramo3Service.selected.G1A1 = null,
      this.tramo3Service.selected.G1A2 = null,
      this.tramo3Service.selected.G1A3 = null,
      this.tramo3Service.selected.G1A4 = null,
      this.tramo3Service.selected.G1A5 = null,
      this.tramo3Service.selected.G1A6 = null,
      this.tramo3Service.selected.G1A7 = null,
      this.tramo3Service.selected.G2A1 = null,
      this.tramo3Service.selected.G2B2 = null,
      this.tramo3Service.selected.G2C3 = null,
      this.tramo3Service.selected.G2D4 = null,
      this.tramo3Service.selected.G2E5 = null,
      this.tramo3Service.selected.G3 = null,
      this.tramo3Service.selected.G4A1 = null,
      this.tramo3Service.selected.G4B2 = null,
      this.tramo3Service.selected.G4C3 = null,
      this.tramo3Service.selected.G5 = null,
      this.tramo3Service.selected.G6 = null,
      this.tramo3Service.selected.OBSM1 = null,
      this.tramo3Service.selected.OBSM2 = null,
      this.tramo3Service.selected.OBSM3 = null,
      this.tramo3Service.selected.OBSM4 = null,
      this.tramo3Service.selected.OBSM5 = null,
      this.tramo3Service.selected.OBSH6 = null,
      this.tramo3Service.selected.OBSH7 = null
           this.tramo3Service.selected.id = null;
    }
    onClear() {
      this.tramo3Service.form.reset();
      this.tramo3Service.initializeFormGroup();
      this.tramo3Service.selected.id = null;
    }
}
