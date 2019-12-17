import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';


//  Servicios
import { Tramo2Service } from '../../../services/tramo2.service';

import { ExporterService } from 'src/app/services/exporter.service';
import { FormTramo2Component } from '../form-tramo2/form-tramo2.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'listTramo2',
  templateUrl: './list-tramo2.component.html',
  styleUrls: ['./list-tramo2.component.scss']
})
export class ListTramo2Component implements OnInit {


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
    // 'F1A1',
    // 'F1A2',
    // 'F1A3',
    // 'F1A4',
    // 'F1A5',
    // 'F1A6',
    // 'F1A7',
    // 'F2A1',
    // 'F2B2',
    // 'F2C3',
    // 'F2D4',
    // 'F2E5',
    // 'F3',
    // 'F4',
    // 'F5',
    // 'F6',
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

  constructor(  private tramo2Service: Tramo2Service,
                private dialog: MatDialog,
                private excelService: ExporterService ) { }

  ngOnInit() {

    this.tramo2Service.getAllTramo2().subscribe(res => this.dataSource.data = res);

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
  
        this.tramo2Service.selected = element;
      }
  
  
    }

    
    onAdd(element?: any){

      this.resetForm();
      this.openModal();
      if (element) {
        this.tramo2Service.selected = element;
      }
  
  
    }

    

  // tslint:disable-next-line:one-line
  onDelete(id: string){

    const confirmacion = confirm('¿estas seguro?')
    console.log('Delete', id);
    //  Llamar al service y al metodo delete
     if(confirmacion){

      this.tramo2Service.deleteTramo2(id);
    }


  }
  


    // tslint:disable-next-line:one-line
    openModal(): void{
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        title: 'Modal'
      };
      dialogConfig.autoFocus = true;
      this.dialog.open(FormTramo2Component, dialogConfig);
    }

    resetForm(): void {

      
      this.tramo2Service.selected.IDCG=null,
      this.tramo2Service.selected.IDLOCAL=null,
      this.tramo2Service.selected.IDENT=null,
      this.tramo2Service.selected.DNI=null,
      this.tramo2Service.selected.CODIGO=null,
      this.tramo2Service.selected.FECHA_EVA=null,
      this.tramo2Service.selected.FECHA_NAC=null,
      this.tramo2Service.selected.EDAD=null,
      this.tramo2Service.selected.F1A1=null,
      this.tramo2Service.selected.F1A2=null,
      this.tramo2Service.selected.F1A3=null,
      this.tramo2Service.selected.F1A4=null,
      this.tramo2Service.selected.F1A5=null,
      this.tramo2Service.selected.F1A6=null,
      this.tramo2Service.selected.F1A7=null,
      this.tramo2Service.selected.F2A1=null,
      this.tramo2Service.selected.F2B2=null,
      this.tramo2Service.selected.F2C3=null,
      this.tramo2Service.selected.F2D4=null,
      this.tramo2Service.selected.F2E5=null,
      this.tramo2Service.selected.F3=null,
      this.tramo2Service.selected.F4=null,
      this.tramo2Service.selected.F5=null,
      this.tramo2Service.selected.F6=null,
      this.tramo2Service.selected.OBSM1=null,
      this.tramo2Service.selected.OBSM2=null,
      this.tramo2Service.selected.OBSM3=null,
      this.tramo2Service.selected.OBSM4=null,
      this.tramo2Service.selected.OBSM5=null,
      this.tramo2Service.selected.OBSH6=null,
      this.tramo2Service.selected.OBSH7=null

  
           this.tramo2Service.selected.id = null;
    }

    
    onClear() {
      this.tramo2Service.form.reset();
      this.tramo2Service.initializeFormGroup();
      this.tramo2Service.selected.id = null;
    }
}
