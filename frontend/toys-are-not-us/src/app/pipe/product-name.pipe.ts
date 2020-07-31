import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'productName',
})
export class ProductNamePipe implements PipeTransform {
  transform(products: Product[], age: string): Product[] {
    console.log('>>>' + age);
    return products.filter((p) => p.age.indexOf(age) != -1);
  }
}
