export type CardDefinitions = {
    mainData: MainData,
    cardPackage: CardCategory[]
}

export type CardCategory = {
    cardCat: string,
    cardData: CardData[]
}

export type CardData = {
    cardTitle: string;
    cardText: string;
    cardImg?: string;
    cardColor: string;
}

export type MainData = {
    mainTitle: string;
    mainLead: string;
    mainImg: string;
}