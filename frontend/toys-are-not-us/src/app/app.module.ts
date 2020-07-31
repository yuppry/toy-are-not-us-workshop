import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { ThanksYouComponent } from './thanks-you/thanks-you.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductNamePipe } from './pipe/product-name.pipe';
import { ProductGenderPipe } from './pipe/product-gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    ShippingComponent,
    PaymentComponent,
    ThanksYouComponent,
    ProductNamePipe,
    ProductGenderPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
