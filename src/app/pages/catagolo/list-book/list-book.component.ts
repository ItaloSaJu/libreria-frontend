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

  dataLibri: any;
  categoriaId: any;
  

  constructor(private libriService : LibriService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoriaId = params['categoriaId']

        if(this.categoriaId == 0){
          this.libriService.AllBook().subscribe(x => {
            this.dataLibri = x
            console.log(this.dataLibri);
          })}
          else{
            this.libriService.LibriDellaStessaCategoria(this.categoriaId).subscribe(x => {
              this.dataLibri = x
              console.log(this.dataLibri);
          })

        }


      })


  }

  clickEvent(){
    this.status = !this.status;       
}


}
