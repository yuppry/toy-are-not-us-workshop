import { Injectable } from '@angular/core';
import { Product, allProduct } from '../model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProduct(): Observable<Product[]> {
    return of(allProduct);
  }
  getSpecificProduct(id: number): Observable<Product> {
    return of(allProduct.filter((p) => p.toy_id === id)[0]);
  }
}
