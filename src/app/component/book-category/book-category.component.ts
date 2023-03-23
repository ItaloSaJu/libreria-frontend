import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibriService } from 'src/app/service/libri/libri.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  categoriaId : any;
  libriDati :  any


  constructor(private libriService : LibriService,
    private route : ActivatedRoute, ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoriaId = params['categoriaId']
        
      });
        // localStorage.setItem('datiLibri', JSON.stringify(this.libriDati))
     
  }

}
