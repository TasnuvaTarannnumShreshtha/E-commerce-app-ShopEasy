import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'addProducts', component:AddProductComponent},
  {path: 'myCart', component:CartComponent},
  {path: 'productDetails', component:ProductDetailsComponent},
  {path: 'productList', component:ProductListComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'add-product', component:AddProductComponent},
    {path:'edit-product', component:EditProductsComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddProductComponent,CartComponent,ProductDetailsComponent,ProductListComponent,DashboardComponent,PageNotFoundComponent];
