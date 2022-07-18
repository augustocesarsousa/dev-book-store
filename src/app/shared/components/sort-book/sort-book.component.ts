import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services/book-service.service';
import { Sort } from '../../enums/sort';

@Component({
  selector: 'app-sort-book',
  templateUrl: './sort-book.component.html',
  styleUrls: ['./sort-book.component.css']
})
export class SortBookComponent implements OnInit {
  sort!: Sort;
  sortList = Sort;
  selectedSort = '_none';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  sortBook(){
    this.bookService.filter.sort = (<any>Sort)[this.selectedSort];
    console.log(this.bookService.filter.sort + " " + this.selectedSort);
    this.bookService.filterBook();
  }

}
