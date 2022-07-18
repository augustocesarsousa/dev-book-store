import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './shared/components/book-card/book-card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FilterByPriceComponent } from './shared/components/filter-by-price/filter-by-price.component';
import { FilterByCategoryComponent } from './shared/components/filter-by-category/filter-by-category.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { SortBookComponent } from './shared/components/sort-book/sort-book.component';
import { SortPipe } from './core/pipes/sort.pipe';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, HeaderComponent, BookCardComponent, FilterByPriceComponent, FilterByCategoryComponent, HomeComponent, BookDetailComponent, SortBookComponent, SortPipe],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
