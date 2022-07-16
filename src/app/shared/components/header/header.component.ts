import { Component, OnInit } from '@angular/core';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BookService } from 'src/app/core/services/book-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerLogo = '{DevBookStore}';
  faSearch = faSearch;
  faCartShopping = faCartShopping;

  constructor(private bootService: BookService) {}

  ngOnInit(): void {}

  filter(name: string){
    this.bootService.filter.name = name;
    this.bootService.filterBook();
  }
}
