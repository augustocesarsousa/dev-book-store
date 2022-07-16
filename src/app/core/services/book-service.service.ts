import { Injectable, OnInit } from '@angular/core';
import { bookList } from 'src/app/shared/mocks/books-list.mock';
import { IBook } from 'src/app/shared/models/book.model';
import { Observable, Subject } from 'rxjs';
import { Category } from 'src/app/shared/enums/category';
import { IFilter } from 'src/app/shared/models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookList: Subject<IBook[]> = new Subject();
  private bookListFiltered: IBook[] = [];
  // private bookListByCategory: IBook[] = bookList;
  // private bookListByPrice: IBook[] = [];

  filter: IFilter = {
    name: '',
    categories: [],
    price: 0
  };

  constructor() {}

  observerBookList(): Observable<IBook[]>{
    return this.bookList.asObservable();
  }

  getAllBooks(): void{
    this.bookList.next(bookList);
  }

  getBookById(id: number): IBook{
    return bookList.find((book: IBook) => book.id === id) as IBook;
  }

  filterBook(): void{
    this.bookListFiltered = bookList;
    console.log(this.filter);
    if(this.filter.name != ''){
      this.bookListFiltered = this.bookListFiltered.filter((book: IBook) => book.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) > -1);
    }
    if(this.filter.categories.length > 0){
      let bookListFilteredTemp: IBook[] = [];
      this.filter.categories.map((category: Category) => {
        this.bookListFiltered
        .filter((book: IBook) => book.category === category)
        .map((book: IBook) => bookListFilteredTemp.push(book))
      });
      this.bookListFiltered = bookListFilteredTemp;
    }
    if(this.filter.price > 0 && this.filter.price <= 200){
      this.bookListFiltered = this.bookListFiltered.filter((book: IBook) => book.price <= this.filter.price);
    }
    if(this.filter.price > 200){
      this.bookListFiltered = this.bookListFiltered.filter((book: IBook) => book.price > this.filter.price);
    }
    this.bookList.next(this.bookListFiltered);
  }

  // filterByName(name: string): void {
  //   this.bookList.next(bookList.filter((book: IBook) => book.name.toLowerCase().indexOf(name.toLowerCase()) > -1));
  // }

  // filterByCategory(categoryList: Category[]): void{
  //   this.bookListByCategory = [];
  //   if(categoryList.length > 0){
  //     categoryList.map((category: Category) => {bookList
  //       .filter((book: IBook) => book.category === category)
  //       .map((book: IBook) => this.bookListByCategory.push(book))
  //     });
  //     this.bookList.next(this.bookListByCategory);
  //   }else{
  //     this.bookList.next(bookList);
  //   }
  // }

  // filterByPrice(price: number): void{
  //   console.log(price);
  //   if(price > 0 && price < 200){
  //     this.bookListByPrice = this.bookListByCategory.filter((book: IBook) => book.price < price);
  //     this.bookList.next(this.bookListByPrice);
  //   }else if(price > 200){
  //     this.bookListByPrice = this.bookListByCategory.filter((book: IBook) => book.price > price);
  //     this.bookList.next(this.bookListByPrice);
  //   }else {
  //     this.bookList.next(this.bookListByCategory);
  //   }
  // }
}
