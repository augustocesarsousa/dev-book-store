import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/enums/category';
import { BookService } from '../../../core/services/book-service.service';

@Component({
  selector: 'app-filter-by-category',
  templateUrl: './filter-by-category.component.html',
  styleUrls: ['./filter-by-category.component.css']
})
export class FilterByCategoryComponent implements OnInit {
  category!: Category;
  categoryList = Category;

  constructor(private bootService: BookService) { }

  ngOnInit(): void {}

  filter(category: string, event: any){
    this.category = (<any>Category)[category];
    if(event.target.checked){
      this.bootService.filter.categories.push(this.category);
    }else{
      this.bootService.filter.categories = this.bootService.filter.categories.filter(item => item !== this.category);
    }
    this.bootService.filterBook();
  }

}
