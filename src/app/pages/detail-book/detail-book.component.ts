import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibriService } from 'src/app/service/libri/libri.service';
import { Datos } from 'src/app/service/model/datos';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  libriId : any;
<<<<<<< HEAD
  libriDati :  any
  categoria :  any
=======
  libriDati :any
  dati : any [] = []
>>>>>>> 11ad3c55b583540eba0aa96904c9b1f58ce80500


  constructor(private libriService : LibriService,
    private route : ActivatedRoute, ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.libriId = params['libriId']
<<<<<<< HEAD
      
      this.libriService.BookId(this.libriId).subscribe( (x:any) => {
        this.libriDati = Array(x)
        // localStorage.setItem('datiLibri', JSON.stringify(this.libriDati))
        
=======

      this.libriService.BookId(this.libriId).subscribe( x => {
        this.libriDati = Array(x)
        // localStorage.setItem('datiLibri', JSON.stringify(this.libriDati))
>>>>>>> 11ad3c55b583540eba0aa96904c9b1f58ce80500
      })
      // this.libriService.LibriDellaStessaCategoria(this.categoriaId).subscribe(x => {
      //   this.libriDati = x
      //   console.log(this.libriDati);
      //   console.log(this.categoriaId);
         
       })
      
      this.libriService.AllBook().subscribe(x=> {
        this.categoria = x.filter(p => p === 1 )
        
        console.log(this.categoria);
      })
      

  }
<<<<<<< HEAD
}
=======


}
>>>>>>> 11ad3c55b583540eba0aa96904c9b1f58ce80500
