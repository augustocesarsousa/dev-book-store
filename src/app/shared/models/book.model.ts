import { Category } from '../enums/category';

export interface IBook {
  author: string;
  category: Category;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  numberOfPages: number;
  price: number;
  publisher: string;
}
