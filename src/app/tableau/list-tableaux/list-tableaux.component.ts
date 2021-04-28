import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TableauService } from 'src/app/service/tableau.service';


@Component({
  selector: 'app-list-tableaux',
  templateUrl: './list-tableaux.component.html',
  styleUrls: ['./list-tableaux.component.css']
})
export class ListTableauxComponent implements OnInit {


  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private tableauService: TableauService) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  ngOnInit(): void {
    this.getTableaux();
  }

  openFiche(): void {
    console.log("go to fiche")
    this.router.navigate(['/fiches']);
  }

  getTableaux() {
    this.tableauService.getTableaux().subscribe((data) => {
      console.log(data)
    })
  }
}
