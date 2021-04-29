import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fiche } from '../models/fiche';

@Injectable({
  providedIn: 'root'
})
export class FicheService {
  constructor(private http: HttpClient) { }

  addFiche(fiche: Fiche) {
    console.log(fiche)
    return this.http.post<Fiche>('/api/fiche', fiche);
  }

  deleteFiche(id: any) {
    return this.http.delete<Fiche>(`/api/fiche/${id}`);
  }

  getFichesByTableauId(id : any){
    return this.http
    .get<Fiche[]>(`/api/fiches/${id}`);
  }

  updateFiche(id: any, fiche: Fiche) {
    console.log(fiche)
    return this.http.put<Fiche>(`/api/fiche/${id}`, fiche);
  }
}
