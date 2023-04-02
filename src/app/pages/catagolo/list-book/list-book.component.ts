import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibriService } from 'src/app/service/libri/libri.service';
import { VisualizzatiRecenteService } from 'src/app/service/visualizzati-recente/visualizzati-recente.service';
import { Datos } from '../../../service/model/datos';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  status: boolean = false;
  button: boolean = false;

  dataLibri: any;
  categoriaId: any;
  lenghtLIbri: any;
  libriId: any;
  dataLenght: any;
  data: [] = [];
  a:any

  constructor(
    private libriService: LibriService,
    private route: ActivatedRoute,
    private visualizzatiRecente: VisualizzatiRecenteService
  ) {}

  ngOnInit(): void {

      this.a = this.visualizzatiRecente.getDati()
      console.log( this.a.categoriaId);


      this.filtro()
    this.route.params.subscribe((params) => {
      this.libriId = params['libriId'];
      this.categoriaId = params['categoriaId'];
      if (this.categoriaId == 0) {
        this.libriService.AllBook().subscribe((x) => {
          console.log(x);

          this.dataLibri = x;
          this.lenghtLIbri = this.dataLibri.length;

          this.dataLenght = this.dataLibri.length;
        });
      } else {
        this.libriService
          .LibriDellaStessaCategoria(this.categoriaId)
          .subscribe((x) => {
            this.dataLibri = x;
            this.lenghtLIbri = this.dataLibri.length;
            // console.log(this.dataLibri);
          });
      }
    });
  }


  filtro(){
    this.libriService.AllBook().subscribe((x:any)=> {
      this.dataLibri = x.filter((x:any) => x.categoria.nomeCategoria == this.a.nomeCategoria )
      console.log(this.dataLibri);

    })
  }

  dataEntrante(c:any) {
    this.visualizzatiRecente.addProdotti(c)

  }

  clickEvent() {
    this.status = !this.status;
    this.button = !this.button;
  }
}
