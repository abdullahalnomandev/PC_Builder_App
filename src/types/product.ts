export interface Review {
  individualRating: number;
  review: string;
}

interface KeyFeatures {
  brand: string;
  model: string;
  specification: string;
}

export interface IProduct {
  image: string;
  productName: string;
  category: string;
  status: string;
  price: string;
  description: string;
  KeyFeatures?: KeyFeatures;
  individualRating?: number;
  averageRating: number;
  reviews: Review[];
}

