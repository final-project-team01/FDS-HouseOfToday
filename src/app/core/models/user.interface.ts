import { sign_type } from './auth.interface';

export type gender = 1 | 2;
export interface user_detail {
  id: number;
  username: string;
  email: string;
  gender?: gender;
  birthday?: Date;
  message?: string;
  profile?: string;
  type?: sign_type;
  social_profile: string;
}

export interface order_list {
  product: string,
  product_option: string,
  quantity: number,
  brand_name?: string,
  product_id?: number,
  thumnail_image?: string,
  total_price?: number
}

export interface user_order {
  id: number;
  user: string;
  order_list: order_list[];
}