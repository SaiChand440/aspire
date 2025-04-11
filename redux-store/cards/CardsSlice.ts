import { ICard, ICardPostBody } from "@/sample-data/getCards";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCards as getDummyCards } from '@/sample-data/getCards'

export const cardsApiSlice = createApi({
    reducerPath: 'cards',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getCards: builder.query<ICard[], void>({
            queryFn: (): Promise<{ data: ICard[] }> => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({ 
                            data: getDummyCards() 
                        })
                    }, 1000)
                })
            }
        }),
        addNewCard: builder.mutation<ICard[], ICardPostBody>({
            queryFn: (card) => {
                const cardNumber = Math.floor(Math.random() * 10000000000000000).toString().padStart(16, '0');
                const cardCvv = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
                const newCard = {
                    id: getDummyCards().length + 1,
                    name: card.name,
                    cardNumber: cardNumber,
                    cardType: 'Debit',
                    cardBalance: 1000,
                    cardExpiry: '12/30',
                    cardCVV: cardCvv,
                    cardStatus: 'Active',
                    cardIssuer: 'visa'
                }
                return { data: [...getDummyCards(), newCard] }
            }
        })
    })
})

export const { useGetCardsQuery, useAddNewCardMutation } = cardsApiSlice;
