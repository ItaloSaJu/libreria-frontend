import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http : HttpClient) { }

  AllCategory(){
    return this.http.get('http://localhost:8081/api/categoria');
  }
}
