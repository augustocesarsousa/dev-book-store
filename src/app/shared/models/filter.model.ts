import { Category } from "../enums/category";

export interface IFilter {
    name: string;
    categories: Category[];
    price: number;
}