import { Injectable } from '@angular/core';
import { CardDefinitions } from './app.definitions'; 

@Injectable({
  providedIn: 'root'
})

export class CardMock {
  
  cards: CardDefinitions[];
  
  constructor() {

    this.cards = [
        cardPackage: [
            {
                cardCat: 'Category 1',
                cardData: [
                    { 
                        cardTitle: '[cat-1] Ez érint minden budapesti autóst is! Így autózhatunk lejárt forgalmival',
                        cardText: 'Vészesen közeleg a lejárt okmányokkal kapcsolatos türelmi idő vége, de nem kell megijedni, van még egy kis haladék a forgalmi érvényességét illetően.',
                        cardImg: 'https://metropol.hu/wp-content/uploads/2022/05/392601420220530bentinkutforgalmi4114MKMP-scaled.jpg',
                        cardColor: 'dark'
                    },
                    {
                        cardTitle: '[cat-1] A magyar emberek pénztárcáját kell a háborús inflációtól megkímélni',
                        cardText: 'Elsősorban a magyar emberek pénztárcáját kell a háborús inflációtól megkímélni – jelentette ki Szentkirályi Alexandra kormányszóvivő az M1 aktuális csatorna hétfő reggeli műsorában.',
                        cardImg: '',
                        cardColor: 'light'
                    },
                    { 
                        cardTitle: '[cat-1] Gondoltad volna? A magyarok 62 százaléka harcolna, ha megtámadnák hazánkat',
                        cardText: 'A Publicus Intézet május 26–30. között 1004 fő megkérdezésével készített országos reprezentatív közvélemény-kutatásban kérdezte az embereket arról, hogy mit tennének, ha Magyarország háborúba keveredne.',
                        cardImg: 'https://metropol.hu/wp-content/uploads/2020/09/5f575e717ebc7151718983FOTOhonvedelemhu-1.jpg',
                        cardColor: 'dark'
                    },
                ]
            },
            {
                cardCat: 'Category 2',
                cardData: [
                    { 
                        cardTitle: '[cat-2] Ez érint minden budapesti autóst is! Így autózhatunk lejárt forgalmival',
                        cardText: 'Vészesen közeleg a lejárt okmányokkal kapcsolatos türelmi idő vége, de nem kell megijedni, van még egy kis haladék a forgalmi érvényességét illetően.',
                        cardImg: 'https://metropol.hu/wp-content/uploads/2022/05/392601420220530bentinkutforgalmi4114MKMP-scaled.jpg',
                        cardColor: 'dark'
                    },
                    {
                        cardTitle: '[cat-2] A magyar emberek pénztárcáját kell a háborús inflációtól megkímélni',
                        cardText: 'Elsősorban a magyar emberek pénztárcáját kell a háborús inflációtól megkímélni – jelentette ki Szentkirályi Alexandra kormányszóvivő az M1 aktuális csatorna hétfő reggeli műsorában.',
                        cardImg: '',
                        cardColor: 'light'
                    },
                    { 
                        cardTitle: '[cat-2] Gondoltad volna? A magyarok 62 százaléka harcolna, ha megtámadnák hazánkat',
                        cardText: 'A Publicus Intézet május 26–30. között 1004 fő megkérdezésével készített országos reprezentatív közvélemény-kutatásban kérdezte az embereket arról, hogy mit tennének, ha Magyarország háborúba keveredne.',
                        cardImg: 'https://metropol.hu/wp-content/uploads/2020/09/5f575e717ebc7151718983FOTOhonvedelemhu-1.jpg',
                        cardColor: 'dark'
                    },
                ]
            },
            {
                cardCat: 'Category 3',
                cardData: [
                    { 
                        cardTitle: '[cat-3] Ez érint minden budapesti autóst is! Így autózhatunk lejárt forgalmival',
                        cardText: 'Vészesen közeleg a lejárt okmányokkal kapcsolatos türelmi idő vége, de nem kell megijedni, van még egy kis haladék a forgalmi érvényességét illetően.',
                        cardImg: 'https://metropol.hu/wp-content/uploads/2022/05/392601420220530bentinkutforgalmi4114MKMP-scaled.jpg',
                        cardColor: 'dark'
                    },
                    {
                        cardTitle: '[cat-3] A magyar emberek pénztárcáját kell a háborús inflációtól megkímélni',
                        cardText: 'Elsősorban a magyar emberek pénztárcáját kell a háborús inflációtól megkímélni – jelentette ki Szentkirályi Alexandra kormányszóvivő az M1 aktuális csatorna hétfő reggeli műsorában.',
                        cardImg: '',
                        cardColor: 'light'
                    },
                    { 
                        cardTitle: '[cat-3] Gondoltad volna? A magyarok 62 százaléka harcolna, ha megtámadnák hazánkat',
                        cardText: 'A Publicus Intézet május 26–30. között 1004 fő megkérdezésével készített országos reprezentatív közvélemény-kutatásban kérdezte az embereket arról, hogy mit tennének, ha Magyarország háborúba keveredne.',
                        cardImg: 'https://metropol.hu/wp-content/uploads/2020/09/5f575e717ebc7151718983FOTOhonvedelemhu-1.jpg',
                        cardColor: 'dark'
                    },
                ]
            },
        ]
    ];
  }
  getCards(): CardDefinitions[] {
    return this.cards;
  }
}
