import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { ThanksYouComponent } from './thanks-you/thanks-you.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  {
    path: 'product/:toy_id',
    component: ProductDetailComponent,
  },
  { path: 'shopping-cart/:toy_id', component: ShoppingCartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'thankyou', component: ThanksYouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
