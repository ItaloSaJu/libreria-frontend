import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibriService } from 'src/app/service/libri/libri.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  dataLibri: any;
  categoriaId: any;

  constructor(private libriService : LibriService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoriaId = params['categoriaId']

      this.libriService.LibriDellaStessaCategoria(this.categoriaId).subscribe( (x:any) => {
        this.dataLibri = x
        console.log(this.dataLibri);
        

      })
    })

  }

}
