import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { BookService } from 'src/app/core/services/book-service.service';
import { Category } from 'src/app/shared/enums/category';
import { IBook } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book!: IBook;
  arrowBack = faAngleLeft;

  constructor(
    private activateRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.book = this.bookService.getBookById(
      Number(this.activateRoute.snapshot.paramMap.get('id'))
    );
  }
}
