import { ListTableauxComponent } from './tableau/list-tableaux/list-tableaux.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFichesComponent } from './fiche/list-fiches/list-fiches.component';

const routes: Routes = [
  { path: '',   redirectTo: '/tableaux', pathMatch: 'full' },
  { path: 'tableaux', component: ListTableauxComponent },
  { path: 'fiches/:tableauId', component: ListFichesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
