import { Component, OnInit } from '@angular/core';
import { LibriService } from 'src/app/service/libri/libri.service';

@Component({
  selector: 'app-visulizzati-recente',
  templateUrl: './visulizzati-recente.component.html',
  styleUrls: ['./visulizzati-recente.component.css']
})
export class VisulizzatiRecenteComponent implements OnInit {

  datiLocalStorage : any
  datiArray:any = []

  constructor() { }

  ngOnInit(): void {


    const dato = localStorage.getItem('ahora');
    if(dato){
      this.datiLocalStorage = Array(JSON.parse(dato))

    }
    this.datiArray.push(this.datiLocalStorage)
  }


}
