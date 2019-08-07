export interface Community {
  today_entry: todayEntry[];
  today_story: todayStory[];
  todaydeal: todayDeal[];
  today_picture: todayPicture[];
  best100_category_list: best100;
}

export interface todayEntry {
  id: number;
  cover_image: string;
  title: string;
  author_profile_image: string;
  author: string;
  scrap_count: number;
  hit_count: number;
}

export interface todayStory {
  id: number;
  cover_image: string;
  title: string;
  author_profile_image: string;
  author: string;
  scrap_count: number;
  hit_count: number;
}

export interface todayDeal {
  id: number;
  brand_name: string;
  name: string;
  discount_rate: string;
  price: number;
  review_count: number;
  star_avg: string;
  thumnail_images: thumnailImage[];
}

export interface thumnailImage {
  id: number;
  image: string;
  product: number;
}

export interface todayPicture {
  id: number;
  author: string;
  image: string;
  author_profile_image: string;
}

export interface best100 {
  total?;
  light_homedeco?;
  daily_supplies?;
  fabric?;
  kitchenware?;
  home_appliances?;
  companion_animal?;
  furniture?;
}

export interface housewarming_posts {
  id: number;
  cover_image: string;
  title: string;
  author_profile_image: string;
  author: string;
  scrap_count: number;
  hit_count: number;
}

export interface housewarming {
  total_post_count: number;
  housewarming_posts: housewarming_posts[];
}

export interface communityPhoto {
  id: number;
  author: string;
  author_profile_image: string;
  image: string;
  hit_count: number;
  like_count: number;
  scrap_count: number;
  comment_count: number;
  text: string;
  comments: commentInfo[];
}

export interface commentInfo {
  author_profile_image: string;
  author: string;
  text: string;
}

export interface housewarming_info {
  id: number;
  housewarming_detail_content: housewarming_detail_content[];
  housewarming_comments: housewarming_comments[];
  title: string;
  created: string;
  author: string;
  author_profile: string;
  like_count: number;
  scrap_count: number;
  hit_count: number;
  cover_image: string;
  structure: string;
  floor_space: string;
  style: string;
  work: string;
  area: string;
  period: string;
  budget: string;
  family: string;
  detail_part: string;
  location: string;
  comment_count: number;
}

export interface housewarming_detail_content {
  id: number;
  title: string;
  image: string;
  text: string;
}

export interface housewarming_comments {
  id: number;
  author: string;
  author_profile_image: string;
  text: string;
  created: string;
}

export interface photo_info {
  id?: number;
  photo_comments?: photo_comments[];
  category?: string;
  created?: string;
  image?: string;
  axis_left?: number;
  axis_top?: number;
  product_image?: string;
  product_id?: number;
  text?: string;
  author?: string;
  author_profile_image?: string;
  author_profile_comment?: string;
  like_count?: number;
  scrap_count?: number;
  hit_count?: number;
  comment_count?: number;
}

export interface photo_comments {
  id: number;
  author: string;
  author_profile_image: string;
  text: string;
  created: string;
  photo: number
}

export interface communityPhoto {
  id: number;
  author: string;
  author_profile_image: string;
  image: string;
  hit_count: number;
  like_count: number;
  scrap_count: number;
  comment_count: number;
  text: string;
  comments: commentInfo[];
}

export interface commentInfo {
  author_profile_image: string;
  author: string;
  text: string;
}
