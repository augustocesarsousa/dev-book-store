import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/enums/category';
import { BookService } from '../../services/book-service.service';

@Component({
  selector: 'app-filter-by-category',
  templateUrl: './filter-by-category.component.html',
  styleUrls: ['./filter-by-category.component.css']
})
export class FilterByCategoryComponent implements OnInit {
  category!: Category;
  categoryList: Category[] = [];
  categories = Category;

  constructor(private bootService: BookService) { }

  ngOnInit(): void {}

  filter(category: string, event: any){
    this.category = (<any>Category)[category];
    if(event.target.checked){
      this.addFilter(this.category);
    }else{
      this.removeFilter(this.category);
    }
    this.bootService.filterByCategory(this.categoryList);
  }

  addFilter(category: Category): void{
    this.categoryList.push(category);
  }

  removeFilter(category: Category): void{
    this.categoryList = this.categoryList.filter(item => item !== category);
  }

}
