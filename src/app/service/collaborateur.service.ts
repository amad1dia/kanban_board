import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collaborateur } from '../models/collaborateur';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  constructor(private http: HttpClient) { }

  getCollaborateurs() {
    return this.http
      .get<Collaborateur[]>('/api/collaborateur/all');
  }

}
