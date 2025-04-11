export interface ICard {
    id: number;
    name: string;
    cardNumber: string;
    cardType: string;
    cardBalance: number;
    cardExpiry: string;
    cardCVV: string;
    cardStatus: string;
    cardIssuer: string;
}

export interface ICardPostBody {
    name: string;
}

export const getCards = (): ICard[] => {
    return [
        {
            "id": 1,
            "name": "John Dasoe",
            "cardNumber": "1234567890123456",
            "cardType": "Debit Card",
            "cardBalance": 1000,
            "cardExpiry": "12/2024",
            "cardCVV": "123",
            "cardStatus": "Active",
            "cardIssuer": "visa"
        }
    ]
}