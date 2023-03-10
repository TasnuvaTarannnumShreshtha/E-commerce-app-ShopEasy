import { Component, OnInit } from '@angular/core';
// import { ProductListService } from '../product-list.service';
import { HttpClient } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {CreateProductService} from "../create-product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit{

   productList: any = [];
   columnsToDisplay = ['productName', 'price', 'quantity', 'category', 'productShortCode', 'buttons'];

  constructor(public http:HttpClient, private router:Router, private prod: CreateProductService){}

  ngOnInit(): void{
    this.http.get('http://localhost:4001/getProductInfo').subscribe((data) =>{
      console.log(data);
      this.productList = data;
      console.log(this.productList);
    });

    // displayedColumns = ['name', 'price', 'quantity', 'code'];
    // dataSource = this.productList.products;
  }


  public onEdit(element: object){
    this.router.navigateByUrl('/edit-product', {state: element});
  }

    public onDelete(element: any){
      console.log(element);
    this.prod.deleteProduct(element._id).subscribe((data:any)=>{
    });
    window.location.reload();
  }


}







// import { Component } from '@angular/core';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.scss']
// })



// export class ProductListComponent {
//     displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
// }
