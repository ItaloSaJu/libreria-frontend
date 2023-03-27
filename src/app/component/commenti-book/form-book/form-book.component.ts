import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentiService } from 'src/app/service/commenti/commenti.service';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css'],
})
export class FormBookComponent implements OnInit {
  @Input() data: any;
  @Output() dataRecensione : any = new EventEmitter()
  dataComment: any;
  constructor(private commentiService: CommentiService) {}

  ngOnInit(): void {
    this.dataComment = {
      titoloCommento: '',
      descriptionCommento: '',
      libro: {
        idLibri: this.data,
      },
    };
  }

  inviare() {
    // this.ngOnInit()
    this.dataRecensione.emit(this.dataComment)
  }




}
