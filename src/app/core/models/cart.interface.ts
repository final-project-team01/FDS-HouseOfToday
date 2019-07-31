export interface cart_option {
  product_option: number;
}

export interface cart_list {
  id: number,
  brand_name: string,
  product: string,
  deliver: string,
  deliver_fee: string,
  product_option: string,
  price: number,
  user: number,
  image: string
}