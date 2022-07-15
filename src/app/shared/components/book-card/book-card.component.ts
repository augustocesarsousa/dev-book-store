import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../enums/category';
import { IBook } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input()
  book!: IBook;

  constructor() {}

  ngOnInit(): void {}
}
