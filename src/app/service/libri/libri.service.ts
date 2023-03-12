import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibriService {

  constructor(private http : HttpClient) { }

  AllBook(){
    return this.http.get('http://localhost:8081/api/libri')
  }

  LibriDellaStessaCategoria(categoriaId : any){
    return this.http.get(`http://localhost:8081/api/category/${categoriaId}`)
  }
}
