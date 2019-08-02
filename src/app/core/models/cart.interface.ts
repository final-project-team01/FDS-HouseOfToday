export interface cart_option {
  product_option: number;
}

export interface cart_list {
  id: number,
  user: number,
  product: string,
  deliver_fee: string,
  deliver: string,
  product_option: string,
  quantity: number;
  brand_name: string,
  total_price: number,
  thumnail_image: string,
  isChecked?: boolean;
}

export interface cart_price {
  total: number;
  deliver_fee: number;
  orderCount: number;
}