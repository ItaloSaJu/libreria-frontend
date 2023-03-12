import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  dataCategoria : any;
  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.AllCategory().subscribe( x => {
      this.dataCategoria = x
      console.log(this.dataCategoria);

    })

  }

}
