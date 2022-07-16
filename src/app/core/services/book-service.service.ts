import { Injectable, OnInit } from '@angular/core';
import { bookList } from 'src/app/shared/mocks/books-list.mock';
import { IBook } from 'src/app/shared/models/book.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookList: Subject<IBook[]> = new Subject();

  constructor() {}

  setList(list: IBook[]){
    this.bookList.next(list);
  }

  getList(): Observable<IBook[]>{
    return this.bookList.asObservable();
  }

  getById(id: number): IBook{
    return bookList.find((book: IBook) => book.id === id) as IBook;
  }

  filterByName(name: string): void {
    this.bookList.next(bookList.filter((book: IBook) => book.name.toLowerCase().indexOf(name.toLowerCase()) > -1));
  }
}
