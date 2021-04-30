import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Tableau } from 'src/app/models/tableau';
import { TableauService } from 'src/app/service/tableau.service';

@Component({
  selector: 'app-update-tableau',
  templateUrl: './update-tableau.component.html',
  styleUrls: ['./update-tableau.component.css']
})
export class UpdateTableauComponent implements OnInit {
  @Input() tableau;

  constructor(public activeModal: NgbActiveModal,
    private tableauService: TableauService,
    private router: Router) { }

  ngOnInit() {
  }

  save(): void {
    let newTableau = new Tableau();
    newTableau.nom = this.tableau.nom;
    newTableau.description = this.tableau.description;

    this.tableauService.updateTableau(this.tableau.id, newTableau).subscribe(reponse => {
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
