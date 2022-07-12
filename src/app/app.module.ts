import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './shared/components/book-card/book-card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FilterByPriceComponent } from './core/components/filter-by-price/filter-by-price.component';
import { FilterByCategoryComponent } from './core/components/filter-by-category/filter-by-category.component';
import { HomeComponent } from './pages/home/home.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, HeaderComponent, BookCardComponent, FilterByPriceComponent, FilterByCategoryComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
