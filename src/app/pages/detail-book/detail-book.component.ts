import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibriService } from 'src/app/service/libri/libri.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  libriId : any;
  libriDati :  any = []


  constructor(private libriService : LibriService,
    private route : ActivatedRoute, ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.libriId = params['libriId']


    })
    this.libriService.BookId(this.libriId).subscribe( x => {
      this.libriDati = Array(x)
      console.log(Array(this.libriDati));
  })
}

}
