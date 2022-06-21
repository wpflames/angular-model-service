export type CardDefinitions = {
    cardPackage: string[];
    cardCat: string;
    cardData: CardData[];
}

export type CardData = {
    cardTitle: string;
    cardText: string;
    cardImg?: string;
    cardColor: string;
}