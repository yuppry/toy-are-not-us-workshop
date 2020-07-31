import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(public service: ProductService, private route: ActivatedRoute) {}

  product: Product;

  ngOnInit(): void {
    const productId: string = this.route.snapshot.paramMap.get('toy_id');
    this.service.getSpecificProduct(productId).subscribe((p) => {
      this.product = p;
    });
    console.log(this.product);
  }
}
