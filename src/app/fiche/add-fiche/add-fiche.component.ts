import { Component, OnInit } from '@angular/core';
import { Fiche } from 'src/app/models/fiche';
import { FicheService } from 'src/app/service/fiche.service';

@Component({
  selector: 'app-add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.css']
})
export class AddFicheComponent implements OnInit {

  constructor(private ficheService: FicheService) { }

  ngOnInit(): void {
  }

  save() : void {
    let fiche = new Fiche();
    
    this.ficheService.addFiche(fiche).subscribe(reponse => {
      console.log(reponse);
      console.log("Enregistrer avec success")
    }, (error) => {
      console.log(error)
    });
  }

}
