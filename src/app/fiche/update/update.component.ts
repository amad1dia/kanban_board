import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Fiche } from 'src/app/models/fiche';
import { FicheService } from 'src/app/service/fiche.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() fiche;

  constructor(
    public activeModal: NgbActiveModal,
    private ficheService: FicheService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    let newFiche = new Fiche();
    newFiche.libelle = this.fiche.libelle;
    newFiche.url = this.fiche.url;
    newFiche.lieu = this.fiche.lieu;
    newFiche.note = this.fiche.note;
    newFiche.dureeTache = this.fiche.duree;

    this.ficheService.updateFiche(this.fiche.id, newFiche).subscribe(reponse => {
      console.log("Enregistrer avec success");
    }, (error) => {
      console.log(error);
    });
  }

  
  refresh(): void {
    this.activeModal.dismiss();
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
