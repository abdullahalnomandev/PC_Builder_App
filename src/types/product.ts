export interface IReview {
  individualRating: number;
  review: string;
}

interface KeyFeatures {
  brand: string;
  model: string;
  specification: string;
}

export interface IProduct {
  _id: string;
  image: string;
  productName: string;
  category: string;
  status: string;
  price: string;
  description: string;
  KeyFeatures: KeyFeatures;
  individualRating: number;
  averageRating: number;
  reviews: IReview[];
}

