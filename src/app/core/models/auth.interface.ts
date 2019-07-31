import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export type sign_type = "카카오" | "구글" | "네이버" | "django";

export interface token {
  token: string
}

export interface non_field_errors {
  non_field_errors: []
}

export interface userInfo {
  email: string;
  password: string;
  nickname: string;
}

export interface account {
  email: string,
  password: string,
  username: string
}

export interface kakao_properties {
  nickname: string,
  profile_image: string,
  thumbnail_image: string
}

export interface kakao_account {
  birthday: number,
  birthday_needs_agreement: boolean,
  email: "hicucu@gmail.com",
  email_needs_agreement: boolean,
  gender_needs_agreement: boolean,
  has_birthday: boolean,
  has_email: boolean,
  has_gender: boolean,
  is_email_valid: boolean,
  is_email_verified: boolean
}

export interface kakao_info {
  id: string,
  properties: kakao_properties,
  kakao_account: kakao_account;
}

export interface token_social {
  type: sign_type,
  unique_user_id: string,
  username: string,
  email: string,
  social_profile: string
}