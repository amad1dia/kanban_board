import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Section, Tableau } from '../models/tableau';
import { SectionService } from '../service/section.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {

  @Input() tableauId;

  addSectionForm = this.formBuilder.group({
    status: ['Choisir une section', Validators.required],
  });

  constructor(private sectionService: SectionService,
    public activeModal: NgbActiveModal,
    private router: Router,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
  }

  save(): void {
    let section = new Section();
    let tableau = new Tableau();
    tableau.id = this.tableauId;
    section.status = this.addSectionForm.value['status'];
    section.tableau = tableau;
    console.log(section)

    this.sectionService.addSection(section).subscribe(reponse => {
      console.log("Enregistrer avec success");
      this.addSectionForm.reset();
    }, (error) => {
      console.log(error)
    });
  }
  onSubmit(): void {
    this.save();
    this.addSectionForm.reset();
  }

  onChange(value: any) {
    //this.selectedCollaborateur = value;
  }

  refresh(): void {
    this.activeModal.dismiss();
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

}
