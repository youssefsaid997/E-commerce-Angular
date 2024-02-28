import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 


  }
  getProducts(){
   return this.http.get<Products>("https://jsonplaceholder.typicode.com/todos"); 
  }
}
