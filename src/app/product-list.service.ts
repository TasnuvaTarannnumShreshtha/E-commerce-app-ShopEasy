import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private url: string = "./assets/data/products.json";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url);

  }
}



