import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibriService } from 'src/app/service/libri/libri.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  libriId : any;
  libriDati :  any
  datiLocalStorage : any = []


  constructor(private libriService : LibriService,
    private route : ActivatedRoute, ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.libriId = params['libriId']

      this.libriService.BookId(this.libriId).subscribe( (x:any) => {
        this.libriDati = Array(x)

        // this.datiLocalStorage.push(this.libriDati)
        // let transaccion = JSON.stringify(this.datiLocalStorage)
        // localStorage.setItem("transa", transaccion)

      })
    })

    this.libriService.disparador.subscribe(data => {
      this.datiLocalStorage.push(data)
      console.log(this.datiLocalStorage);

    })

    const dato = localStorage.getItem('ahora');
    if(dato  ){
      this.datiLocalStorage = Array(JSON.parse(dato))
      console.log(this.datiLocalStorage);

    }
}

}
