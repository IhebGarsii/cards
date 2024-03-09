import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'luffy';
  card = {
    imageURL: '',
    power: 0,
    name: '',
  };
  cards: any[] = [];

  add() {
    this.cards.push(this.card);
    this.card = {
      imageURL: '',
      power: 0,
      name: '',
    };
    console.log(this.cards);
  }
}
