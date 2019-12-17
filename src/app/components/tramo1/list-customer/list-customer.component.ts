import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';


// Servicios
import { CustomerService } from '../../../services/customer.service';


import { MatDialog, MatDialogConfig } from '@angular/material';

import { FormComponent } from '../form/form.component';
import { ExporterService } from 'src/app/services/exporter.service';



@Component({
  // tslint:disable-next-line:component-selector
  selector:  'listCustomers' ,
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {



  // displayedColumns: string[] = ['name', 'city', 'order', 'actions','new'];

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
  // 'E1A1',
  // 'E1A2',
  // 'E1A3',
  // 'E1A4',
  // 'E1A5',
  // 'E1A6',
  // 'E1A7',
  // 'E2',
  // 'E3',
  // 'E4',
  // 'E5',
  // 'E6',
  // 'F7',
  // 'F8',
  // 'F9',
  // 'F10',
  // 'F11',
  // 'F12',
  // 'F13',
  'actions'
];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor( private customerService: CustomerService,
               private dialog: MatDialog,
               private excelService: ExporterService  ) { }


  ngOnInit() {

    this.customerService.getAllCustomers().subscribe(res => this.dataSource.data = res);
    // this.customerService.getAllCustomers().subscribe(res => console.log(res));
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

      this.customerService.selected = element;
    }


  }

  
  onAdd(element?: any){

    this.resetForm();
    this.openModal();
    if (element) {
      this.customerService.selected = element;
    }


  }


  // tslint:disable-next-line:one-line
  onDelete(id: string){
    const confirmacion = confirm('¿estas seguro?')
    // console.log('Delete', id);
    //  Llamar al service y al metodo delete
    if(confirmacion){

      this.customerService.deleteCustomer(id);
    }

  }

  // tslint:disable-next-line:one-line
  openModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Modal'
    };
    dialogConfig.autoFocus = true;
    this.dialog.open(FormComponent, dialogConfig);
  }

  // resetForm(): void {
  //   this.customerService.selected.name = '';
  //   this.customerService.selected.city = '';
  //   this.customerService.selected.order = '';
  //   this.customerService.selected.id = null;
  // }
  resetForm(): void {

    this.customerService.selected.IDCG = '',
    this.customerService.selected.IDLOCAL = '',
    this.customerService.selected.IDENT = '',
    this.customerService.selected.DNI = '',
    this.customerService.selected.CODIGO = '',
    this.customerService.selected.FECHA_EVA = '',
    this.customerService.selected.FECHA_NAC = '',
    this.customerService.selected.EDAD = '',
    this.customerService.selected.E1A1 = '',
    this.customerService.selected.E1A2 = '',
    this.customerService.selected.E1A3 = '',
    this.customerService.selected.E1A4 = '',
    this.customerService.selected.E1A5 = '',
    this.customerService.selected.E1A6 = '',
    this.customerService.selected.E1A7 = '',
    this.customerService.selected.E2 = '',
    this.customerService.selected.E3 = '',
    this.customerService.selected.E4 = '',
    this.customerService.selected.E5 = '',
    this.customerService.selected.E6 = '',
    this.customerService.selected.F7 = '',
    this.customerService.selected.F8 = '',
    this.customerService.selected.F9 = '',
    this.customerService.selected.F10 = '',
    this.customerService.selected.F11 = '',
    this.customerService.selected.F12 = '',
    this.customerService.selected.F13 = '',

         this.customerService.selected.id = null;
  }
  onClear() {
    this.customerService.form.reset();
    this.customerService.initializeFormGroup();
    this.customerService.selected.id = null;
  }

}
