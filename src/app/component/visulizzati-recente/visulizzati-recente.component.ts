import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visulizzati-recente',
  templateUrl: './visulizzati-recente.component.html',
  styleUrls: ['./visulizzati-recente.component.css']
})
export class VisulizzatiRecenteComponent implements OnInit {

  datiLocalStorage : any 
  datiArray: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    // this.libriService.disparador.subscribe(data => {
    //   this.datiLocalStorage.push(data)
    //   console.log(this.datiLocalStorage);

    // })

    const dato = localStorage.getItem('ahora');
    if(dato){
      this.datiLocalStorage = JSON.parse(dato)
      
    }
    this.datiArray.push(this.datiLocalStorage)
    console.log(this.datiArray);
  }

}
