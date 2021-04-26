import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faEdit, faTrashAlt, faPlus, faUserClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-fiches',
  templateUrl: './list-fiches.component.html',
  styleUrls: ['./list-fiches.component.css']
})
export class ListFichesComponent implements OnInit {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  faUserClock = faUserClock;

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit(): void {
  }

}
