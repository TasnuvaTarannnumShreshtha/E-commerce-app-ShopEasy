import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {

  url = "http://localhost:4001/createProduct";
  url2 = "http://localhost:4001/editProduct";
  url3 = "http://localhost:4001/deleteProduct";

  constructor(public http: HttpClient){ }

  createProduct(data:any){
    console.log(data);
    return this.http.post(this.url, data);
  }

  editProduct(data:any){
    console.log(data);
    return this.http.post(this.url2, data);
  }

  deleteProduct(data:any){
    console.log(data);
    return this.http.delete(`${this.url3}/${data}`);
  }


}
