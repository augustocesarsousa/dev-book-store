import { Injectable } from '@angular/core';
import { bookList } from 'src/app/shared/mocks/books-list.mock';
import { IBook } from 'src/app/shared/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookList: IBook[];

  constructor() {
    this.bookList = bookList;
  }

  getAll(): IBook[]{
    return this.bookList;
  }
}
