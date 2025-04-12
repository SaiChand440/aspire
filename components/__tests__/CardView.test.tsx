import React from 'react';
import { render } from '@testing-library/react-native';
import CardView from '../CardView';
import { CardIssuer, ICard } from '@/models';

// Mock the SVG components
jest.mock('@/assets/icons/AspireLogoWithText', () => 'AspireLogoWithText');
jest.mock('@/assets/icons/VisaLogo', () => 'VisaLogo');

describe('CardView', () => {
  const mockCard: ICard = {
    id: 1,
    name: 'John Doe',
    cardNumber: '4242424242424242',
    cardType: 'debit',
    cardBalance: 1000,
    cardCurrency: 'SGD',
    cardExpiry: '12/25',
    cardCVV: '123',
    cardStatus: 'active',
    cardIssuer: CardIssuer.VISA,
    cardFreezed: false
  };

  it('renders correctly with visible card details', () => {
    const { getByText } = render(
      <CardView item={mockCard} cardNumberVisible={true} />
    );

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('4242    4242    4242    4242')).toBeTruthy();
    expect(getByText('Thru: 12/25')).toBeTruthy();
    expect(getByText('CVV: 123')).toBeTruthy();
  });

  it('renders correctly with masked card details', () => {
    const { getByText } = render(
      <CardView item={mockCard} cardNumberVisible={false} />
    );

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('XXXX    XXXX    XXXX    4242')).toBeTruthy();
    expect(getByText('Thru: 12/25')).toBeTruthy();
    expect(getByText('CVV: XXX')).toBeTruthy();
  });

  it('applies freezed style when card is freezed', () => {
    const freezedCard = { ...mockCard, cardFreezed: true };
    const { getByTestId } = render(
      <CardView item={freezedCard} cardNumberVisible={false} />
    );

    const cardContainer = getByTestId('card-container');
    expect(cardContainer.props.style).toContainEqual({ backgroundColor: '#CCCCCC' });
  });
}); 