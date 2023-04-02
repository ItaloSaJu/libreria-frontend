import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { LibriService } from 'src/app/service/libri/libri.service';
import { VisualizzatiRecenteService } from 'src/app/service/visualizzati-recente/visualizzati-recente.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  filtrosSeleccionados = {
    categoria: [],
    stato: []
  };
  data:any


  dataCategoria : any;
  allBook : any

  categoriaClick:boolean = false;
  statoClick:boolean = false;
  offerteClick:boolean = false;

  constructor(private categoriaService : CategoriaService,
              private libriService : LibriService,
              private service : VisualizzatiRecenteService
              ) { }

  ngOnInit(): void {
    this.categoriaService.AllCategory().subscribe( x => {
      this.dataCategoria = x
    })

    this.libriService.AllBook().subscribe(x=> {
      this.allBook = x
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

  actualizarCategoria(){    // console.log(categoria ,c, $event.target.checked);
    // this.data = categoria ,c, $event.target.checked
    this.libriService.check().subscribe((x:any) => {

    })
  }

  actualizarNuovoUsato(filtro:String , $event:any){
    console.log(filtro , $event.target.checked);
    this.data=filtro , $event.target.checked
  }



}
