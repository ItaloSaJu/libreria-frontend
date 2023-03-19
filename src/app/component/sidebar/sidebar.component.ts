import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { LibriService } from 'src/app/service/libri/libri.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  dataCategoria : any;
  libriService : any [] = []

  categoriaClick:boolean = false;
  statoClick:boolean = false;
  offerteClick:boolean = false;

  constructor(private categoriaService : CategoriaService,
              private sibriService : LibriService) { }

  ngOnInit(): void {
    this.categoriaService.AllCategory().subscribe( x => {
      this.dataCategoria = x

    })


  }



  clickCategoria(){
    this.categoriaClick =!this.categoriaClick
  }
  clickStato(){
    this.statoClick =!this.statoClick
  }
  clickOfferte(){
    this.offerteClick = !this.offerteClick
  }




}
