import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tableau } from '../models/tableau';

@Injectable({
  providedIn: 'root'
})
export class TableauService {

constructor(private http: HttpClient) { }

  getTableaux() {
    return this.http
    .get<Tableau[]>('/api/tableau/all');
  }

  addTableau(tableau: Tableau) {
    return this.http.post<String>('/api/tableau', tableau);
  }

  deleteTableau(id: any) {
    return this.http.delete<Tableau>(`/api/tableau/${id}`);
  }

  getTableauById(id: any){
    return this.http.get<Tableau>(`/api/tableau/${id}`)
  }

  updateTableau(id: any, tableau: Tableau){
    return this.http.put<Tableau>(`/api/tableau/${id}`, tableau)

  }

}
