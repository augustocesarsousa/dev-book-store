import { Category } from "../enums/category";
import { Sort } from "../enums/sort";

export interface IFilter {
    name: string;
    categories: Category[];
    price: number;
    sort: Sort;
}