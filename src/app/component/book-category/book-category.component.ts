import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibriService } from 'src/app/service/libri/libri.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  libriId : any;
  libriDati :  any
  categoria :  any


  constructor(private libriService : LibriService,
    private route : ActivatedRoute, ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.libriId = params['libriId']

      this.libriService.BookId(this.libriId).subscribe( (x:any) => {
        this.libriDati = Array(x)
        // console.log(this.libriDati[0].categoria.nomeCategoria);
      })
    })
    this.libriService.AllBook().subscribe(x => {
      this.categoria =  x.filter((p:any) =>{
        return p.categoria.nomeCategoria == this.libriDati[0].categoria.nomeCategoria

    } )
          // console.log(this.categoria);

      })
  }

}
