import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentiService } from 'src/app/service/commenti/commenti.service';
import { LibriService } from 'src/app/service/libri/libri.service';

@Component({
  selector: 'app-commenti-book',
  templateUrl: './commenti-book.component.html',
  styleUrls: ['./commenti-book.component.css'],
})
export class CommentiBookComponent implements OnInit {
  nascondi: boolean = false;
  formComment: boolean = false;
  allComment: any = [];
  libriId: any;
  mostraTuttiCommentari:boolean = false

  constructor(
    private commentiService: CommentiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.libriId = params['libriId'];

      this.commentiService.AllCommenti().subscribe((x) => {
        this.allComment = x.filter((p:any) => {
          return p.libro.idLibri == this.libriId

        });
        console.log(this.allComment);
      });
    });
  }

  nascondiCommenti() {
    this.nascondi = !this.nascondi;
  }
  formCommenti() {
    this.formComment = !this.formComment;
  }
  dataRecensione(e:any){
    this.commentiService.addBook(e).subscribe((x) => {
      console.log(x);
      this.ngOnInit()
    });
    this.formCommenti()

  }

  cargarMasComentarios() {
    this.mostraTuttiCommentari = true;
  }

}
