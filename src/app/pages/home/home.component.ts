import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { BookService } from 'src/app/core/services/book-service.service';
import { bannerImagesList } from 'src/app/shared/mocks/banner-images-list.mock';
import { IBook } from 'src/app/shared/models/book.model';
import { ICarouselImage } from 'src/app/shared/models/carousel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  arrowRight = faArrowRight;
  arrowLeft = faArrowLeft;
  isChecked = false;
  bookList!: IBook[];
  images: ICarouselImage[] = bannerImagesList;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private bootService: BookService
  ) {
    this.breakpointObserver
      .observe(['(max-width: 991px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.isChecked = false;
        } else {
          this.isChecked = true;
        }
      });
    this.bootService
      .observerBookList()
      .subscribe((bookList) => (this.bookList = bookList));
  }

  ngOnInit(): void {
    this.bootService.filterBook();
  }

  checkValue(e: any) {
    this.isChecked = e.target.checked;
  }
}
