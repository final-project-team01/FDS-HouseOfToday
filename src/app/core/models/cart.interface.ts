export interface cart_option {
  product: number;
  product_option: number;
  quantity: number;
}

export interface buy_option {
  pd_id: string;
  po_list: string;
  qty_list: string;
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
  thumnail_image: string
}

export interface cart_price {
  total: number;
  real: number;
  deliver_fee: number;
  discount: number;
}