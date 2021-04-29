import { Component, Input, OnInit } from '@angular/core';
import { Fiche, Section } from 'src/app/models/fiche';
import { FicheService } from 'src/app/service/fiche.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CollaborateurService } from 'src/app/service/collaborateur.service';
import { Collaborateur } from 'src/app/models/collaborateur';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.css']
})
export class AddFicheComponent implements OnInit {

  @Input() sectionId;

  addFicheForm = this.formBuilder.group({
    libelle: ['', Validators.required],
    lieu: ['', Validators.required],
    url: ['', Validators.required],
    date: ['', Validators.required],
    note: ['', Validators.required],
    duree: ['', Validators.required],
    collaborateur: ['', Validators.required],
  });

  collaborateurs: Collaborateur[] = []
  selectedCollaborateur!: Collaborateur;

  constructor(
    private ficheService: FicheService,
    private formBuilder: FormBuilder,
    private collaborateurService: CollaborateurService,
    public activeModal: NgbActiveModal,
    private location: Location,
    private router: Router) {
    this.getCollaborateurs();
  }

  ngOnInit(): void {
  }

  save(): void {
    let fiche = new Fiche();
    fiche.libelle = this.addFicheForm.value['libelle'];
    fiche.url = this.addFicheForm.value['url'];
    fiche.lieu = this.addFicheForm.value['lieu'];
    fiche.note = this.addFicheForm.value['note'];
    fiche.dureeTache = this.addFicheForm.value['duree'];
    fiche.collaborateur = this.selectedCollaborateur;
    let section = new Section();
    section.id = this.sectionId;
    fiche.section = section;

    this.ficheService.addFiche(fiche).subscribe(reponse => {
      console.log("Enregistrer avec success");
      this.addFicheForm.reset();
    }, (error) => {
      console.log(error)
    });
  }

  getCollaborateurs() {
    return this.collaborateurService.getCollaborateurs().subscribe(data => {
      data.forEach(collaborateur => {
        this.collaborateurs.push(collaborateur);
      })
    })
  }

  onSubmit(): void {
    this.save();
    this.addFicheForm.reset();
  }

  onChange(value: any) {
    this.selectedCollaborateur = value;
  }

  refresh(): void {
    this.activeModal.dismiss();
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
