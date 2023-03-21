import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibriService } from 'src/app/service/libri/libri.service';
import { Datos } from 'src/app/service/model/datos';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  libriId : any;
  libriDati :any
  dati : any [] = []


  constructor(private libriService : LibriService,
    private route : ActivatedRoute, ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.libriId = params['libriId']

      this.libriService.BookId(this.libriId).subscribe( x => {
        this.libriDati = Array(x)
        // localStorage.setItem('datiLibri', JSON.stringify(this.libriDati))
      })
    })

  }


}
