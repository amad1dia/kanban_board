import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Section } from '../models/fiche';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

  addSection(section: Section) {
    return this.http.post<String>('/api/section', section);
  }

}
