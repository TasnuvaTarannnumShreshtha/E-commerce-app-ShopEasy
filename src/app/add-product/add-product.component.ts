import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {CreateProductService} from "../create-product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  products:any;
  constructor(private fb: FormBuilder, private prod: CreateProductService){
    this.products = fb.group(
      {
        productName: new FormControl('', Validators.required),
        productShortCode: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        createdDate: new FormControl('', Validators.required),
        origin: new FormControl('', Validators.required),
        description: new FormControl('')
      }
    )
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.prod.createProduct(this.products.value).subscribe((data:any)=>{
      console.log(data);
    });
  }
}



// productForm !: FormGroup<any>;
//   constructor(private formBuilder: FormBuilder, public http:HttpClient){ }

//   ngOnInit(): void {
//       this.productForm = this.formBuilder.group({
//         name : ['', Validators.required],
//         price : ['', Validators.required],
//         quantity : ['', Validators.required],
//         category : ['', Validators.required],
//         origin : [''],
//         code : [''],
//         date : ['', Validators.required],
//         description : [''],
//       })


//       this.http.get('http://localhost:4001/getProductInfo').subscribe(data =>{
//       console.log(data);
//   });
// }

//   postProduct(data: any){
//     return this.http.post<any>("http://localhost:4001/createProduct", data);
//   }

//   getProduct(){
//     return this.http.get<any>("http://localhost:4001/getProductInfo");
//   };

//   addProduct(){
//     console.log(this.productForm.value);

//     // this.http.post('http://localhost:4001/createProduct', {"productName":name.value, "price":price.value, "quantity":quantity.value}).subscribe(data =>{
//     // this.productForm = data;
//     if(this.productForm.valid){
//       this.http.postProduct(this.productForm.value).
//       subscribe
//     }
//   }
