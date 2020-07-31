import { Component, OnInit } from '@angular/core';
import { Product, allProduct } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products: Product[];
  filterAge: string = '';
  filterGender: string = '';

  constructor(public service: ProductService) {}

  ngOnInit(): void {
    //this.products = this.service.getAllProduct();
    this.getAll();
  }
  getAll(): void {
    this.service.getAllProduct().subscribe((products) => {
      return (this.products = products);
    });
  }
}
