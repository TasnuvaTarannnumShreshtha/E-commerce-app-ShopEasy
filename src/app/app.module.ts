import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
