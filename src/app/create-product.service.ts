import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {

  url = "http://localhost:4001/createProduct";

  constructor(public http: HttpClient){ }

  createProduct(data:any){
    console.log(data);
    return this.http.post(this.url, data);
  }


}
