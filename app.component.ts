import { Component, OnInit } from '@angular/core';

import { CardDefinitions } from './app.definitions'; 
import { CardMock } from './app.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  cards: CardDefinitions = CardMock;

  ngOnInit() {}
}
