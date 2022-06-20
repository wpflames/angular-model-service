import { Injectable } from '@angular/core';
import { Card } from '../models/Card'; 

@Injectable({
  providedIn: 'root'
})

export class CardService {
  
  cards: Card[];
  
  constructor() {
    
    this.cards = [
      { 
        cardTitle: 'Ez érint minden budapesti autóst is! Így autózhatunk lejárt forgalmival',
        cardText: 'Vészesen közeleg a lejárt okmányokkal kapcsolatos türelmi idő vége, de nem kell megijedni, van még egy kis haladék a forgalmi érvényességét illetően.',
        cardCat: 'Okmány',
        cardImg: 'https://metropol.hu/wp-content/uploads/2022/05/392601420220530bentinkutforgalmi4114MKMP-scaled.jpg',
        cardColor: 'dark'
      },
      { 
          cardTitle: 'A magyar emberek pénztárcáját kell a háborús inflációtól megkímélni',
          cardText: 'Elsősorban a magyar emberek pénztárcáját kell a háborús inflációtól megkímélni – jelentette ki Szentkirályi Alexandra kormányszóvivő az M1 aktuális csatorna hétfő reggeli műsorában.',
          cardCat: 'Szentkirályi Alexandra',
          cardImg: 'https://metropol.hu/wp-content/uploads/2020/10/DYT20201001012-scaled.jpg',
          cardColor: 'light'
      },
      { 
          cardTitle: 'Gondoltad volna? A magyarok 62 százaléka harcolna, ha megtámadnák hazánkat',
          cardText: 'A Publicus Intézet május 26–30. között 1004 fő megkérdezésével készített országos reprezentatív közvélemény-kutatásban kérdezte az embereket arról, hogy mit tennének, ha Magyarország háborúba keveredne.',
          cardCat: 'Honvédelem',
          cardImg: 'https://metropol.hu/wp-content/uploads/2020/09/5f575e717ebc7151718983FOTOhonvedelemhu-1.jpg',
          cardColor: 'dark'
      },
      { 
          cardTitle: 'Vitézy Dávid: Már tanulom a MÁV menetrendjét is…',
          cardText: 'A közlekedési államtitkár elárulta, hogy mikorra készül el az új Közlekedési Múzeum, de a BKK vezetőjével való kapcsolatáról is beszélt.',
          cardCat: 'Exkluzív interjú',
          cardImg: 'https://metropol.hu/wp-content/uploads/2022/06/5643160c158994e881b9daac98c29fa393ce51dcollageImage.jpeg',
          cardColor: 'light'
      },
      { 
          cardTitle: 'Jó, ha tudod! Ez a változás lép életbe hétfőtől a Budapest–Szob vasútvonalon',
          cardText: 'A Metropol összeszedte a nap legfontosabb tudnivalóit a vonattal közlekedőknek, illetve azt, hogy hol adhatunk vért a hét első napján.',
          cardCat: 'IX. kerület',
          cardImg: 'https://metropol.hu/wp-content/uploads/2021/04/7715883MetropolKBKelenfoldutcaembere03KBMetropol-scaled.jpg',
          cardColor: 'dark'
      },
      { 
          cardTitle: 'Varga Mihály: Magyarország három helyet lépett előre a versenyképességi ranglistán',
          cardText: 'Magyarország három helyet lépett előre a legfrissebb nemzetközi versenyképességi ranglistán – közölte hétfői Facebook-bejegyzésében Varga Mihály pénzügyminiszter.',
          cardCat: 'Varga Mihály',
          cardImg: 'https://metropol.hu/wp-content/uploads/2022/06/5724701vargamihaly.jpg',
          cardColor: 'light'
      },
      { 
        cardTitle: 'Ez érint minden budapesti autóst is! Így autózhatunk lejárt forgalmival',
        cardText: 'Vészesen közeleg a lejárt okmányokkal kapcsolatos türelmi idő vége, de nem kell megijedni, van még egy kis haladék a forgalmi érvényességét illetően.',
        cardCat: 'Okmány',
        cardImg: 'https://metropol.hu/wp-content/uploads/2022/05/392601420220530bentinkutforgalmi4114MKMP-scaled.jpg',
        cardColor: 'dark'
      },
      { 
          cardTitle: 'A magyar emberek pénztárcáját kell a háborús inflációtól megkímélni',
          cardText: 'Elsősorban a magyar emberek pénztárcáját kell a háborús inflációtól megkímélni – jelentette ki Szentkirályi Alexandra kormányszóvivő az M1 aktuális csatorna hétfő reggeli műsorában.',
          cardCat: 'Szentkirályi Alexandra',
          cardImg: 'https://metropol.hu/wp-content/uploads/2020/10/DYT20201001012-scaled.jpg',
          cardColor: 'light'
      },
      { 
          cardTitle: 'Gondoltad volna? A magyarok 62 százaléka harcolna, ha megtámadnák hazánkat',
          cardText: 'A Publicus Intézet május 26–30. között 1004 fő megkérdezésével készített országos reprezentatív közvélemény-kutatásban kérdezte az embereket arról, hogy mit tennének, ha Magyarország háborúba keveredne.',
          cardCat: 'Honvédelem',
          cardImg: 'https://metropol.hu/wp-content/uploads/2020/09/5f575e717ebc7151718983FOTOhonvedelemhu-1.jpg',
          cardColor: 'dark'
      },
      { 
          cardTitle: 'Vitézy Dávid: Már tanulom a MÁV menetrendjét is…',
          cardText: 'A közlekedési államtitkár elárulta, hogy mikorra készül el az új Közlekedési Múzeum, de a BKK vezetőjével való kapcsolatáról is beszélt.',
          cardCat: 'Exkluzív interjú',
          cardImg: 'https://metropol.hu/wp-content/uploads/2022/06/5643160c158994e881b9daac98c29fa393ce51dcollageImage.jpeg',
          cardColor: 'light'
      },
      { 
          cardTitle: 'Jó, ha tudod! Ez a változás lép életbe hétfőtől a Budapest–Szob vasútvonalon',
          cardText: 'A Metropol összeszedte a nap legfontosabb tudnivalóit a vonattal közlekedőknek, illetve azt, hogy hol adhatunk vért a hét első napján.',
          cardCat: 'IX. kerület',
          cardImg: 'https://metropol.hu/wp-content/uploads/2021/04/7715883MetropolKBKelenfoldutcaembere03KBMetropol-scaled.jpg',
          cardColor: 'dark'
      },
      { 
          cardTitle: 'Varga Mihály: Magyarország három helyet lépett előre a versenyképességi ranglistán',
          cardText: 'Magyarország három helyet lépett előre a legfrissebb nemzetközi versenyképességi ranglistán – közölte hétfői Facebook-bejegyzésében Varga Mihály pénzügyminiszter.',
          cardCat: 'Varga Mihály',
          cardImg: 'https://metropol.hu/wp-content/uploads/2022/06/5724701vargamihaly.jpg',
          cardColor: 'light'
      },
      { 
        cardTitle: 'Ez érint minden budapesti autóst is! Így autózhatunk lejárt forgalmival',
        cardText: 'Vészesen közeleg a lejárt okmányokkal kapcsolatos türelmi idő vége, de nem kell megijedni, van még egy kis haladék a forgalmi érvényességét illetően.',
        cardCat: 'Okmány',
        cardImg: 'https://metropol.hu/wp-content/uploads/2022/05/392601420220530bentinkutforgalmi4114MKMP-scaled.jpg',
        cardColor: 'dark'
      },
      { 
          cardTitle: 'A magyar emberek pénztárcáját kell a háborús inflációtól megkímélni',
          cardText: 'Elsősorban a magyar emberek pénztárcáját kell a háborús inflációtól megkímélni – jelentette ki Szentkirályi Alexandra kormányszóvivő az M1 aktuális csatorna hétfő reggeli műsorában.',
          cardCat: 'Szentkirályi Alexandra',
          cardImg: 'https://metropol.hu/wp-content/uploads/2020/10/DYT20201001012-scaled.jpg',
          cardColor: 'light'
      },
      { 
          cardTitle: 'Gondoltad volna? A magyarok 62 százaléka harcolna, ha megtámadnák hazánkat',
          cardText: 'A Publicus Intézet május 26–30. között 1004 fő megkérdezésével készített országos reprezentatív közvélemény-kutatásban kérdezte az embereket arról, hogy mit tennének, ha Magyarország háborúba keveredne.',
          cardCat: 'Honvédelem',
          cardImg: 'https://metropol.hu/wp-content/uploads/2020/09/5f575e717ebc7151718983FOTOhonvedelemhu-1.jpg',
          cardColor: 'dark'
      },
      { 
          cardTitle: 'Vitézy Dávid: Már tanulom a MÁV menetrendjét is…',
          cardText: 'A közlekedési államtitkár elárulta, hogy mikorra készül el az új Közlekedési Múzeum, de a BKK vezetőjével való kapcsolatáról is beszélt.',
          cardCat: 'Exkluzív interjú',
          cardImg: 'https://metropol.hu/wp-content/uploads/2022/06/5643160c158994e881b9daac98c29fa393ce51dcollageImage.jpeg',
          cardColor: 'light'
      },
      { 
          cardTitle: 'Jó, ha tudod! Ez a változás lép életbe hétfőtől a Budapest–Szob vasútvonalon',
          cardText: 'A Metropol összeszedte a nap legfontosabb tudnivalóit a vonattal közlekedőknek, illetve azt, hogy hol adhatunk vért a hét első napján.',
          cardCat: 'IX. kerület',
          cardImg: 'https://metropol.hu/wp-content/uploads/2021/04/7715883MetropolKBKelenfoldutcaembere03KBMetropol-scaled.jpg',
          cardColor: 'dark'
      },
      { 
          cardTitle: 'Varga Mihály: Magyarország három helyet lépett előre a versenyképességi ranglistán',
          cardText: 'Magyarország három helyet lépett előre a legfrissebb nemzetközi versenyképességi ranglistán – közölte hétfői Facebook-bejegyzésében Varga Mihály pénzügyminiszter.',
          cardCat: 'Varga Mihály',
          cardImg: 'https://metropol.hu/wp-content/uploads/2022/06/5724701vargamihaly.jpg',
          cardColor: 'light'
      },
    ]
  }
  getCards(): Card[] {
    console.log('Fetching cards from service...');
    return this.cards;
  }
}
