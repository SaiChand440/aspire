export interface ICard {
    id: number;
    name: string;
    cardNumber: string;
    cardType: string;
    cardBalance: number;
    cardCurrency: string;
    cardExpiry: string;
    cardCVV: string;
    cardStatus: string;
    cardIssuer: CardIssuer;
    cardFreezed?: boolean;
}

export interface ICardPostBody {
    name: string;
}

export enum CardIssuer {
    VISA = 'visa',
    MASTERCARD = 'mastercard',
    AMERICAN_EXPRESS = 'american-express',
    RUPAY = 'rupay'
}