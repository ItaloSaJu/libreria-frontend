import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibriService } from 'src/app/service/libri/libri.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  libriId : any;
  libriDati :  any
  dati : Array<any> = []
  @Output() close: EventEmitter<any> = new EventEmitter();


  constructor(private libriService : LibriService,
    private route : ActivatedRoute, ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.libriId = params['libriId']

      this.libriService.BookId(this.libriId).subscribe( (x:any) => {
        this.libriDati = Array(x)
        this.close.emit(this.dati)
        // localStorage.setItem('datiLibri', JSON.stringify(this.libriDati))

        
      })
    })

  }
  

}
