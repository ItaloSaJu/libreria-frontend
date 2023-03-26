import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentiService {

  constructor(private http : HttpClient) { }

  addBook(commento:any){
    return this.http.post<[]>(`http://localhost:8081/api/commento`,commento)
  }
  AllCommenti(){
    return this.http.get<[]>('http://localhost:8081/api/commento')
  }

  CommentiById(commentiId : any){
    return this.http.get<[]>(`http://localhost:8081/api/commento/${commentiId}`)
  }

  commentiDelloStessoLibro(libroId:any){
    return this.http.get<[]>(`http://localhost:8081/api/libro/${libroId}`)
  }
}
