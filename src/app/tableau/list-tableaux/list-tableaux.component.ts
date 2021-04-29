import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Tableau } from 'src/app/models/tableau';
import { FicheService } from 'src/app/service/fiche.service';
import { TableauService } from 'src/app/service/tableau.service';

export interface DialogData {
  id: any;
}

@Component({
  selector: 'app-list-tableaux',
  templateUrl: './list-tableaux.component.html',
  styleUrls: ['./list-tableaux.component.css']
})
export class ListTableauxComponent implements OnInit {
  tableaux: Tableau[] = []

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private tableauService: TableauService,
    public dialog: MatDialog) {

  }

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

  openFiche(tableauId: any): void {
    console.log("go to fiche")
    this.router.navigate(['/fiches', tableauId]);
  }

  getTableaux() {
    this.tableauService.getTableaux().subscribe((data) => {
      console.log(data)
      this.tableaux = [];
      data.forEach(value => this.tableaux.push(value))
      console.log(this.tableaux)
    })
  }

  deleteTableau(id: any) {
    console.log(id)
    this.tableauService.deleteTableau(id).subscribe((response) => {
      console.log(response);
      this.getTableaux();
    }, error => {
      this.getTableaux();
    })
  }

  openDialog(tableauId: any): void {
    const dialogRef = this.dialog.open(DialogDelete, {
      width: '250px',
      data: { id: tableauId }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getTableaux();
    });
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
    private tableauService: TableauService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(id: any): void {
    this.tableauService.deleteTableau(id).subscribe((response) => {
      this.dialogRef.close();
    }, (error) => {
      this.dialogRef.close();
    })
  }
}