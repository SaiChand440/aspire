import { CardIssuer, ICard } from "@/models"


export const getCards = (): ICard[] => {
    return [
        {
            "id": 1,
            "name": "John Dasoe",
            "cardNumber": "1234567890123456",
            "cardType": "Debit Card",
            "cardCurrency": "S$",
            "cardBalance": 1000,
            "cardExpiry": "12/29",
            "cardCVV": "123",
            "cardStatus": "Active",
            "cardIssuer": CardIssuer.VISA,
            "cardFreezed": false
        }
    ]
}