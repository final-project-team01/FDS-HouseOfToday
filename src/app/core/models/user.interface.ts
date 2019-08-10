import { sign_type } from './auth.interface';

export type gender = 1 | 2 | 0;
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

export interface account_update {
  username: string,
  email: string,
  gender: gender,
  birthday: string,
  message: string,
  profile: string
}

export interface account_update_payload {
  username?: string,
  gender?: gender,
  birthday?: string,
  message?: string
}