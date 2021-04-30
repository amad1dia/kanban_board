import { Component, Input, OnInit } from '@angular/core';
import { FicheService } from '../service/fiche.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() listFiche
  constructor(private ficheService: FicheService) {
  }
  ngOnInit() {
  }
}

export class FormSearchFiche {
  libelle: string;

  constructor(libelle: string) {
    this.libelle = libelle;
  }
  setLibelle(libelle: string) {
    this.libelle = libelle;
  }
}
