import { Component, Input, OnInit } from '@angular/core';
import { CommentiService } from 'src/app/service/commenti/commenti.service';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css'],
})
export class FormBookComponent implements OnInit {
  @Input() data: any;
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
    this.commentiService.addBook(this.dataComment).subscribe((x) => {
      console.log(x);
    });
  }
}
