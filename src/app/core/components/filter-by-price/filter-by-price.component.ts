import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book-service.service';

@Component({
  selector: 'app-filter-by-price',
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['./filter-by-price.component.css']
})
export class FilterByPriceComponent implements OnInit {

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
  }

  filter(price: number): void{
    this.bookService.filter.price = price;
    this.bookService.filterBook();
    // this.bookService.filterByPrice(price);
  }

}
