import { Component } from '@angular/core';
import { ReduxLikeService } from '../redux-like.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(public share: ReduxLikeService) {}
  card = {
    imageURL: '',
    power: 0,
    name: '',
  };
  cards: any[] = [];
  add() {
    this.share.cards.push(this.card);
    this.card = {
      imageURL: '',
      power: 0,
      name: '',
    };
  }
}
