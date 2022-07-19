import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private bootService: BookService, private router: Router) {}

  ngOnInit(): void {}

  filter(name: string) {
    this.router.navigate(['']);
    this.bootService.filter.name = name;
    this.bootService.filterBook();
  }
}
