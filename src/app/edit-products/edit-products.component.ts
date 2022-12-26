import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {CreateProductService} from "../create-product.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent {

    products:any;
    private productData:any;
  constructor(private fb: FormBuilder, private prod: CreateProductService, private location:Location){
    this.productData = this.location.getState();
    console.log(this.productData);

    this.products = fb.group(
      {
        productName: new FormControl(this.productData.productName),
        productShortCode: new FormControl(this.productData.productShortCode),
        category: new FormControl(this.productData.category),
        price: new FormControl(parseInt(this.productData.price)),
        quantity: new FormControl(parseInt(this.productData.quantity)),
        createdDate: new FormControl(this.productData.createdDate),
        origin: new FormControl(this.productData.origin),
        description: new FormControl(this.productData.description)
      }
    )
  }

  ngOnInit(): void {

  }

  // onSubmit(){
  //   this.prod.createProduct(this.products.value).subscribe((data:any)=>{
  //     console.log(data);
  //   });
  // }

  onEdit(){
    let data = {...this.products.value, price: parseInt(this.products.value.price),  quantity: parseInt(this.products.value.quantity), _id: this.productData._id}
    this.prod.editProduct(data).subscribe((data:any)=>{
    });
  }
}
