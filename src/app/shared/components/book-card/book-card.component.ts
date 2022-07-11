import { Component, OnInit } from '@angular/core';
import { Category } from '../../enums/category';
import { IBook } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  book!: IBook;

  constructor() {
    this.book = {
      id: 1,
      name: 'Agile: Desenvolvimento de software com entregas frequentes e foco no valor de negócio',
      price: 49.9,
      category: Category.methodology,
      imageUrl: '/assets/images/agile.jpg',
      author: 'André Faria Gomes',
      publisher: 'Casa do Código (16 abril 2014)',
      numberOfPages: 214,
      description:
        'As diversas metodologias ágeis que formam o tão falado "Agile" são hoje uma das maneiras mais eficientes de guiar um projeto do ínicio ao fim, sem complicações e mantendo o tempo inteiro o foco na entrega de valor para o cliente. Nesse livro, André Faria Gomes, renomado coach e líder de equipes, explica como os diferentes sabores de Agile podem fazer um projeto de sucesso. Aprenda como o Kanban, XP e Scrum podem ser usados em conjunto e onde cada um dos métodos se complementa, além de conhecer dicas para adotar as metodologias no seu dia a dia de trabalho.',
    };
  }

  ngOnInit(): void {}
}
