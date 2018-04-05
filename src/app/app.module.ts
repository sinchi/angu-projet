import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    OrdersComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
