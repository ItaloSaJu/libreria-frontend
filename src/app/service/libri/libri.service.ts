import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable , Output , } from '@angular/core';

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

  BookId(libriId : any){
    return this.http.get<[]>(`http://localhost:8081/api/libri/${libriId}`)

  }

  @Output() disparador : EventEmitter<any> = new EventEmitter()
}
