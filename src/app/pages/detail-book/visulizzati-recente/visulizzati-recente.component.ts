import { Component, OnInit } from '@angular/core';
import { LibriService } from 'src/app/service/libri/libri.service';
import { VisualizzatiRecenteService } from 'src/app/service/visualizzati-recente/visualizzati-recente.service';

@Component({
  selector: 'app-visulizzati-recente',
  templateUrl: './visulizzati-recente.component.html',
  styleUrls: ['./visulizzati-recente.component.css']
})
export class VisulizzatiRecenteComponent implements OnInit {

  prodotti : any

  constructor(private visualizzatiRecente: VisualizzatiRecenteService) { }

  ngOnInit(): void {
    this.prodotti = this.visualizzatiRecente.getProdotti().slice(0,4)
  }




}
