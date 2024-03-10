import { Component, Input } from '@angular/core';
import { ReduxLikeService } from '../redux-like.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(public share: ReduxLikeService) {}
}
