import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  public products:any = [];

  constructor(private productList: ProductListService){

  }
  ngOnInit(){
    this.productList.getProducts().
    subscribe(productData => this.products = productData);
  }




}
