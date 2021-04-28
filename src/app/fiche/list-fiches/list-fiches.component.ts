import { Component, OnInit, Inject } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FicheService } from 'src/app/service/fiche.service';


export interface DialogData {
  id: any;
}


@Component({
  selector: 'app-list-fiches',
  templateUrl: './list-fiches.component.html',
  styleUrls: ['./list-fiches.component.css']
})
export class ListFichesComponent implements OnInit {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;

  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog,
    private ficheService: FicheService) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDelete, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

  delete(id: any): void {
    this.ficheService.deleteFiche(id);
  }
}

@Component({
  selector: 'dialog_delete',
  templateUrl: 'dialog_delete.html',
})
export class DialogDelete {

  constructor(
    public dialogRef: MatDialogRef<DialogDelete>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private ficheService: FicheService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(id: any): void {
    this.ficheService.deleteFiche(id);
  }

}
