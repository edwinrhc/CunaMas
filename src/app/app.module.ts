import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './mat/mat.module';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CustomerService } from './services/customer.service';

// FIREBASE
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { FormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';

import { APP_ROUTING } from './app.routes';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ExporterService } from './services/exporter.service';

// Tramo1
import { ListCustomerComponent } from './components/tramo1/list-customer/list-customer.component';
import { FormComponent } from './components/tramo1/form/form.component';
// Tramo2
import { ListTramo2Component } from './components/tramo2/list-tramo2/list-tramo2.component';
import { FormTramo2Component } from './components/tramo2/form-tramo2/form-tramo2.component';
// Tramo3
import { ListTramo3Component } from './components/tramo3/list-tramo3/list-tramo3.component';
import { FormTramo3Component } from './components/tramo3/form-tramo3/form-tramo3.component';
// Tramo4
import { ListTramo4Component } from './components/tramo4/list-tramo4/list-tramo4.component';
import { FormTramo4Component } from './components/tramo4/form-tramo4/form-tramo4.component';

// Services
import { Tramo2Service } from './services/tramo2.service';
import { Tramo3Service } from './services/tramo3.service';
import { Tramo4Service } from './services/tramo4.service';

// Routes


import { ReactiveFormsModule } from "@angular/forms";
import { FichadatosForm1Component } from './components/FichaDatos/fichadatos1/fichadatos-form1/fichadatos-form1.component';
import { ListFichadatos1Component } from './components/FichaDatos/fichadatos1/list-fichadatos1/list-fichadatos1.component';
import { FichaDatos1Service } from './services/fichadatos1.service';



@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    FormComponent,
    MainNavComponent,
    ListTramo2Component,
    FormTramo2Component,
    ListTramo3Component,
    FormTramo3Component,
    ListTramo4Component,
    FormTramo4Component,
    FichadatosForm1Component,
    ListFichadatos1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    MatSliderModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.configFirebase),
    APP_ROUTING,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CustomerService,
    ExporterService,
    Tramo2Service,
    Tramo3Service,
    Tramo4Service,
    FichaDatos1Service,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent, FormTramo2Component,FormTramo3Component, FormTramo4Component,FichadatosForm1Component]
})
export class AppModule { }
