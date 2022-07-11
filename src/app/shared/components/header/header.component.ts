import { Component, OnInit } from '@angular/core';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerLogo = '{DevBookStore}';
  faSearch = faSearch;
  faCartShopping = faCartShopping;

  constructor() {}

  ngOnInit(): void {}
}
