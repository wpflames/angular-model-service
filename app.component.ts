import { Component, OnInit } from '@angular/core';

import { CardDefinitions } from './app.definitions'; 
import { CardMock } from './app.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  mainTitle = 'Totális káosz! Szinte lehetetlenség lesz közlekedni mától Budapesten';
  mainLead = 'Mától fejre áll szinte az egész város közlekedése, szívnak az autósok és a tömegközlekedők is. Lezárják a budai alsó rakpartot a Lánchíd felújítása miatt, de a 2-es villamos és a 3-as metró közlekedésében is lesz változás.';
  mainImg = 'https://metropol.hu/wp-content/uploads/2022/06/5636819b004a637f0f5cd64ae5da529d22309d0collageImage.jpeg';

  card: CardDefinitions = {
    cardPackage: [],
    cardCat: '',
    cardData: [],
    cardTitle: '',
    cardText: '',
    cardImg: '',
    cardColor: ''
    
  }
  cards: CardDefinitions[];

  constructor(private cardMock: CardMock) { }

  ngOnInit() {
    this.cards = this.cardMock.getCards();
  }
}
