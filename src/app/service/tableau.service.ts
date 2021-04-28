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
    console.log(tableau)
    return this.http.post<Tableau>('/api/tableau', tableau);
  }

  deleteTableau(id: any) {
    return this.http.delete<Tableau>(`/api/tableau/${id}`);
  }

}
