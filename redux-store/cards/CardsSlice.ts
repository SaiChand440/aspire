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
                const cardBalance = Math.floor(Math.random() * 1000)
                const existingCards = await getCardData();
                const newCard = {
                    id: (existingCards?.length ?? 0) + 1,
                    name: card.name,
                    cardNumber: cardNumber,
                    cardType: 'Debit Card',
                    cardBalance: cardBalance,
                    cardExpiry: '12/30',
                    cardCVV: cardCvv,
                    cardStatus: 'Active',
                    cardIssuer: CardIssuer.VISA,
                    cardCurrency: 'S$'
                }
                storeCardData([...existingCards ?? [], newCard]);
                return { data: [...existingCards ?? [], newCard] }
            }
        }),
        freezeCard: builder.mutation<ICard[], { cardId: number, freeze: boolean }>({
            queryFn: async ({ cardId, freeze }) => {
                const existingCards = await getCardData();
                if (!existingCards) return { data: [] };
                
                const updatedCards = existingCards.map(card => 
                    card.id === cardId ? { ...card, cardFreezed: freeze } : card
                );
                
                await storeCardData(updatedCards);
                return { data: updatedCards };
            }
        })
    })
})

export const { useGetCardsQuery, useAddNewCardMutation, useFreezeCardMutation } = cardsApiSlice;
