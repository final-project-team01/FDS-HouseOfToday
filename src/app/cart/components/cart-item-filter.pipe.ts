import { Pipe, PipeTransform } from '@angular/core';
import { cart_list } from 'src/app/core/models/cart.interface';

@Pipe({
  name: 'cartItemFilter'
})
export class CartItemFilterPipe implements PipeTransform {

  transform(cartItem: cart_list[], brand: string): any {
    return cartItem.filter(item => item.brand_name === brand);
  }

}
