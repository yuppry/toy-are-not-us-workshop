import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'productGender',
})
export class ProductGenderPipe implements PipeTransform {
  transform(products: Product[], gender: string): Product[] {
    console.log('>>>' + gender);
    return products.filter((p) => p.gender.indexOf(gender) != -1);
  }
}
