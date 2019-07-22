export type gender = 1 | 2;
export interface user_detail {
  id: number;
  username: string;
  email: string;
  gender?: gender;
  birthday?: Date;
  message?: string;
  profile?: string;
}