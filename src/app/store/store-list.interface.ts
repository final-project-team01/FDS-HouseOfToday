export interface StoreList {
  id: number,
  brand_name: string,
  name: string,
  price: number,
  thumnail_images: StoreThumbnail,
  review: StoreReview
}

export interface StoreThumbnail {
  id: number,
  image: string,
  product: number
}

export interface StoreReview {
  star_score: number
}
