import React from 'react';
import { render } from '@testing-library/react-native';
import ScreenRedirectView from '../ScreenRedirectView';
import { Colors } from '@/constants/Colors';

describe('ScreenRedirectView', () => {
  it('renders the redirect message correctly', () => {
    const { getByText } = render(<ScreenRedirectView />);
    
    const message = getByText('Please move ahead to debit card screen to view the test screen');
    expect(message).toBeTruthy();
  });

  it('applies correct styles to the container', () => {
    const { getByTestId } = render(<ScreenRedirectView />);
    const container = getByTestId('redirect-container');
    
    expect(container.props.style).toEqual(
      expect.objectContaining({
        flex: 1,
        backgroundColor: Colors.light.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
      })
    );
  });

  it('applies correct styles to the text', () => {
    const { getByTestId } = render(<ScreenRedirectView />);
    const text = getByTestId('redirect-text');
    
    expect(text.props.style).toEqual(
      expect.objectContaining({
        color: Colors.light.blueTint,
        fontSize: 20,
        fontWeight: 'bold'
      })
    );
  });
}); 