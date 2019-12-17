import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './components/tramo1/list-customer/list-customer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ListTramo2Component } from './components/tramo2/list-tramo2/list-tramo2.component';
import { ListTramo3Component } from './components/tramo3/list-tramo3/list-tramo3.component';
import { ListTramo4Component } from './components/tramo4/list-tramo4/list-tramo4.component';
import { FichadatosForm1Component } from './components/FichaDatos/fichadatos1/fichadatos-form1/fichadatos-form1.component';
import { ListFichadatos1Component } from './components/FichaDatos/fichadatos1/list-fichadatos1/list-fichadatos1.component';

const APP_ROUTES: Routes = [

    {path: '', component: ListCustomerComponent},
    {path: 'tramo1', component: ListCustomerComponent},
    {path: 'tramo2', component: ListTramo2Component},
    {path: 'tramo3', component: ListTramo3Component},
    {path: 'tramo4', component: ListTramo4Component},
    {path: 'ficha', component: ListFichadatos1Component},
    {path: '**', pathMatch: 'full',  redirectTo: ''},
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
