import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-by-price',
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['./filter-by-price.component.css']
})
export class FilterByPriceComponent implements OnInit {
  minValue = 0;
  maxValue = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
