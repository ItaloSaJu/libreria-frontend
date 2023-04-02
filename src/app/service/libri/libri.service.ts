import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable , Output , } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibriService {

  constructor(private http : HttpClient) { }

  AllBook(){
    return this.http.get<[]>('http://localhost:8081/api/libri')
  }

  LibriDellaStessaCategoria(categoriaId : any){
    return this.http.get<[]>(`http://localhost:8081/api/category/${categoriaId}`)
  }

  BookId(libriId : any){
    return this.http.get<[]>(`http://localhost:8081/api/libri/${libriId}`)
  }

  check(){
    return this.http.get<[]>(`http://localhost:8081/api/check`)
  }

  getUser(){
    return this.http.get<[]>('http://localhost:8081/api/users')
  }

  postUser(user:any){
  return this.http.post<[]>('http://localhost:8081/api/user',user)
  }

}
