import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Tableau } from 'src/app/models/tableau';
import { TableauService } from 'src/app/service/tableau.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-tableau',
  templateUrl: './add-tableau.component.html',
  styleUrls: ['./add-tableau.component.css']
})
export class AddTableauComponent implements OnInit {
  model: NgbDateStruct;
  tableau: Tableau = new Tableau();
  addTableauForm = this.formBuilder.group({
    nom: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(
    private tableauService: TableauService,
    private formBuilder: FormBuilder,
    public activateModal: NgbActiveModal,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
  }

  save(): void {
    let tableau = new Tableau();
    tableau.nom = this.addTableauForm.value["nom"]
    tableau.description = this.addTableauForm.value["description"]

    this.tableauService.addTableau(tableau).subscribe(response => {
      console.log(response);
      console.log("saved successfully");
    }, (error) => {
      console.log(error)
    })
  }

  onSubmit(): void {
    this.save();
    this.addTableauForm.reset();
  }

  refresh(): void {
    this.activateModal.dismiss();
    window.location.reload()
  }
}
