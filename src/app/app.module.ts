import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './fiche/details/details.component';
import { UpdateComponent } from './fiche/update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListFichesComponent } from './fiche/list-fiches/list-fiches.component';
import { ListTableauxComponent } from './tableau/list-tableaux/list-tableaux.component';
import { AddFicheComponent } from './fiche/add-fiche/add-fiche.component';
import { AddTableauComponent } from './tableau/add-tableau/add-tableau.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    UpdateComponent,
    ListFichesComponent,
    ListTableauxComponent,
    AddFicheComponent,
    AddTableauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    NgbModule,
    FontAwesomeModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
