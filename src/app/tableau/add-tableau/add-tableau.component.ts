import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-tableau',
  templateUrl: './add-tableau.component.html',
  styleUrls: ['./add-tableau.component.css']
})
export class AddTableauComponent implements OnInit {
  model: NgbDateStruct;

  constructor() { }

  ngOnInit(): void {
  }

}
