import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisualizzatiRecenteService {

  prodotti : any[] = []
  prodottiRecente = new BehaviorSubject<any>(this.prodotti)

  constructor() { }

  addProdotti(prodotto:any){
    this.prodotti.push(prodotto)
    this.prodottiRecente.next(this.prodotti)
    console.log(this.prodotti);
    
  }

  getProdotti(){
    return this.prodotti
  }
}
