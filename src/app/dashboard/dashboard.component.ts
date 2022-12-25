import { Component, OnInit } from '@angular/core';
// import { ProductListService } from '../product-list.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  productList: any = [];

  constructor(public http:HttpClient){}

  ngOnInit(): void{
    this.http.get('http://localhost:4001/getProductInfo').subscribe((data) =>{
      console.log(data);
      this.productList = data;
      console.log(this.productList);
    });
    // subscribe(productData => this.products = productData);
  }




}




  // ngOnInit(): void{
  //   this.http.get('http://localhost:4001/getProductInfo').subscribe((data) =>{
  //     console.log(data);
  //     this.productList = data;
  //   });
    // subscribe(productData => this.products = productData);
  // }


  // public products:any = [];

  // constructor(private productList: ProductListService){

  // }
  // ngOnInit(){
  //   this.productList.getProducts().
  //   subscribe(productData => this.products = productData);
  // }
