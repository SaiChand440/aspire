import { ICard } from '@/models';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CARD_DATA_KEY = 'cards';

export const storeCardData = async (value: ICard[]) => {
  await AsyncStorage.setItem(CARD_DATA_KEY, JSON.stringify(value));
};

export const getCardData = async (): Promise<ICard[] | null> => {
  const value = await AsyncStorage.getItem(CARD_DATA_KEY);
  return value ? JSON.parse(value) : null;
};


