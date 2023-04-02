import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisualizzatiRecenteService {

  prodotti : any[] = []
  prodottiRecente = new BehaviorSubject<any>(this.prodotti)
  dati : any = []
  datiRecente = new BehaviorSubject<any>(this.dati)

  constructor() { }

  addProdotti(prodotto:any){
    this.prodotti.push(prodotto)
    this.prodottiRecente.next(this.prodotti)
    console.log(this.prodotti);

  }
  addDat(c:any){
    this.dati = c
    console.log(this.dati);
    this.datiRecente.next(this.dati)

  }

  getDati(){
    console.log('asasasas' + this.dati);
    return this.dati
  }
  getProdotti(){
    return this.prodotti
  }
}
