
export interface product_info {
  id: number;
  thumnail_images: thumbnail_image[];
  detail_images: detail_image[];
  product_option: product_option[];
  review: review[];
  pdqna: qna[];
  name: string;
  price: number;
  brand_name: string;
  detail_name: string;
  detail_color: string;
  detail_size: string;
  detail_component: string;
  detail_auth: string;
  detail_cost: string;
  detail_standard: string;
  detail_mfc: string;
  detail_mis: string;
  detail_as: string;
  return_fee: string;
  exchange_fee: string;
  return_address: string;
  deliver: string;
  deliver_fee: string;
  deliver_no_go: string;
  deliver_fee_diff: string;
  created: string;
  category: number;
}

export interface thumbnail_image {
  id: number;
  image: string;
  product: number;
}

export interface detail_image {
  id: number;
  image: string;
  product: number;
}

export interface product_option {
  id: number;
  type: string;
  name: string;
  price: number;
  product: number;
}

export interface review {
  id: number;
  star_score: number;
  image: null | string;
  comment: string;
  created: string;
  user: number;
  product: number;
  helpful: [];
}

export interface qna {
  id: number;
  type: string;
  comment: string;
  completed: boolean;
  created: string;
  a_author: string;
  a_comment: string;
  a_created: string;
  user: number;
  product: number;
}
export interface store_list {
  id: number;
  name: string;
  image: string;
}

export interface store_home {
  todaydeal: today_deal;
  category? : object;
  poular_products? : object;
}

export interface today_deal {
  id: number;
  brand_name: string;
  name: string;
  discount_rate: string;
  price: number;
  review_count: number;
  star_avg: string;
  thumnail_images: detail_image[];
}