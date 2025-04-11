import { CardIssuer, ICard, ICardPostBody } from "@/models";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCards as getDummyCards } from '@/sample-data/getCards'
import { getCardData, storeCardData } from "@/utils/storage";
export const cardsApiSlice = createApi({
    reducerPath: 'cards',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getCards: builder.query<ICard[], void>({
            queryFn: async (): Promise<{ data: ICard[] }> => {
                const data = await getCardData();
                return { data: data ?? [] };
            }
        }),
        addNewCard: builder.mutation<ICard[], ICardPostBody>({
            queryFn: async (card) => {
                const cardNumber = Math.floor(Math.random() * 10000000000000000).toString().padStart(16, '0');
                const cardCvv = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
                const newCard = {
                    id: getDummyCards().length + 1,
                    name: card.name,
                    cardNumber: cardNumber,
                    cardType: 'Debit Card',
                    cardBalance: 1000,
                    cardExpiry: '12/30',
                    cardCVV: cardCvv,
                    cardStatus: 'Active',
                    cardIssuer: CardIssuer.VISA,
                    cardCurrency: 'S$'
                }
                const existingCards = await getCardData();
                storeCardData([...existingCards ?? [], newCard]);
                return { data: [...existingCards ?? [], newCard] }
            }
        })
    })
})

export const { useGetCardsQuery, useAddNewCardMutation } = cardsApiSlice;
