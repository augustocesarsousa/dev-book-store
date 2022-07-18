import { Component, Input, OnInit } from '@angular/core';
import { ICarouselImage } from '../../models/carousel.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() images: ICarouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlider = false;
  @Input() sliderInterval = 3000;

  selecttedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlider) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextCLick();
    }, this.sliderInterval);
  }

  selectedImage(index: number): void {
    this.selecttedIndex = index;
  }

  onPrevCLick(): void {
    if (this.selecttedIndex === 0) {
      this.selecttedIndex = this.images.length - 1;
    } else {
      this.selecttedIndex--;
    }
  }

  onNextCLick(): void {
    if (this.selecttedIndex === this.images.length - 1) {
      this.selecttedIndex = 0;
    } else {
      this.selecttedIndex++;
    }
  }
}
