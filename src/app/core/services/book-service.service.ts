import { Injectable, OnInit } from '@angular/core';
import { bookListMock } from 'src/app/shared/mocks/books-list.mock';
import { IBook } from 'src/app/shared/models/book.model';
import { Observable, Subject } from 'rxjs';
import { Category } from 'src/app/shared/enums/category';
import { IFilter } from 'src/app/shared/models/filter.model';
import { Sort } from 'src/app/shared/enums/sort';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookList: Subject<IBook[]> = new Subject();
  private bookListFiltered: IBook[] = [];

  filter: IFilter = {
    name: '',
    categories: [],
    price: 0,
    sort: Sort._none
  };

  constructor() {}

  observerBookList(): Observable<IBook[]>{
    return this.bookList.asObservable();
  }

  getAllBooks(): void{
    this.bookList.next(bookListMock);
  }

  getBookById(id: number): IBook{
    return bookListMock.find((book: IBook) => book.id === id) as IBook;
  }

  filterBook(): void{
    this.bookListFiltered = bookListMock;
    if(this.filter.name != '') {
      this.bookListFiltered = this.filterBookListByName(this.bookListFiltered);
    }
    if(this.filter.categories.length > 0) {
      this.bookListFiltered = this.filterBookListByCategory(this.bookListFiltered);
    }
    if(this.filter.price > 0){
      if(this.filter.price <= 200) this.bookListFiltered = this.filterBookListByPriceLess(this.bookListFiltered);
      if(this.filter.price > 200) this.bookListFiltered = this.filterBookListByPriceMore(this.bookListFiltered);
    }
    if(this.filter.sort !== Sort._none){
      this.bookListFiltered = this.sortBookList(this.bookListFiltered);
    }
    this.bookList.next(this.bookListFiltered);
  }

  private filterBookListByName(bookList: IBook[]): IBook[]{
    return bookList.filter((book: IBook) => book.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1);
  }

  private filterBookListByCategory(bookList: IBook[]): IBook[]{
    let bookListTemp: IBook[] = [];
    this.filter.categories.map((category: Category) => {
      bookList
      .filter((book: IBook) => book.category === category)
      .map((book: IBook) => bookListTemp.push(book))
    });
    return bookListTemp;
  }

  private filterBookListByPriceLess(bookList: IBook[]): IBook[]{
    return bookList.filter((book: IBook) => book.price <= this.filter.price);
  }

  private filterBookListByPriceMore(bookList: IBook[]): IBook[]{
    return bookList.filter((book: IBook) => book.price > this.filter.price);
  }

  private sortBookList(bookList: IBook[]): IBook[]{
    if(this.filter.sort === Sort.nameAscending){
      bookList.sort((a: IBook, b: IBook) => a.name > b.name ? 1 : -1);
    }
    if(this.filter.sort === Sort.nameDescending){
      bookList.sort((a: IBook, b: IBook) => a.name < b.name ? 1 : -1);
    }
    if(this.filter.sort === Sort.priceAscending){
      bookList.sort((a: IBook, b: IBook) => a.price > b.price ? 1 : -1);
    }
    if(this.filter.sort === Sort.priceDescending){
      bookList.sort((a: IBook, b: IBook) => a.price < b.price ? 1 : -1);
    }
    return bookList;
  }
}
