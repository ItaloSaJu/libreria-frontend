import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibriService } from 'src/app/service/libri/libri.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  status: boolean = false;
  button: boolean = false;

  dataLibri: any;
  categoriaId: any;
  lenghtLIbri: any;
  libriId: any;
  dataLenght: any;
  data: Array<any> =[]


  constructor(private libriService : LibriService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoriaId = params['categoriaId']

        if(this.categoriaId == 0){
          this.libriService.AllBook().subscribe(x => {
            this.dataLibri = x
            this.lenghtLIbri = this.dataLibri.length;
            
            this.dataLenght = this.dataLibri.length
          })}
          else{
            this.libriService.LibriDellaStessaCategoria(this.categoriaId).subscribe(x => {
              this.dataLibri = x
              this.lenghtLIbri = this.dataLibri.length;
            })
          }
        })        
    }
    
    dataEntrante(c:any){
      this.data = c
      localStorage.setItem('ahora', JSON.stringify(this.data))
  }

  clickEvent(){
    this.status = !this.status;
    this.button = !this.button;
}



}
