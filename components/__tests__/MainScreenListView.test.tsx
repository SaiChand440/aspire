import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainScreenListView from '../MainScreenListView';
import { Colors } from '@/constants/Colors';

describe('MainScreenListView', () => {
  const defaultProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    children: <div>Test Icon</div>
  };

  it('renders basic content correctly', () => {
    const { getByText } = render(<MainScreenListView {...defaultProps} />);
    
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('does not render switch by default', () => {
    const { queryByTestId } = render(<MainScreenListView {...defaultProps} />);
    
    expect(queryByTestId('list-switch')).toBeNull();
  });

  it('renders switch when showSwitch is true', () => {
    const { getByTestId } = render(
      <MainScreenListView 
        {...defaultProps} 
        showSwitch={true}
        switchValue={false}
      />
    );
    
    expect(getByTestId('list-switch')).toBeTruthy();
  });

  it('calls onSwitchChange when switch is toggled', () => {
    const onSwitchChange = jest.fn();
    const { getByTestId } = render(
      <MainScreenListView 
        {...defaultProps} 
        showSwitch={true}
        switchValue={false}
        onSwitchChange={onSwitchChange}
      />
    );
    
    const switchComponent = getByTestId('list-switch');
    fireEvent(switchComponent, 'valueChange', true);
    
    expect(onSwitchChange).toHaveBeenCalledWith(true);
  });

  it('applies correct styles to container and text elements', () => {
    const { getByTestId } = render(<MainScreenListView {...defaultProps} />);
    
    const container = getByTestId('list-container');
    const title = getByTestId('list-title');
    const subtitle = getByTestId('list-subtitle');
    
    expect(container.props.style).toEqual(
      expect.objectContaining({
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 20
      })
    );
    
    expect(title.props.style).toEqual(
      expect.objectContaining({
        fontSize: 14,
        fontWeight: 'medium',
        color: Colors.light.title
      })
    );
    
    expect(subtitle.props.style).toEqual(
      expect.objectContaining({
        fontSize: 13,
        fontWeight: 'regular',
        color: Colors.light.subTitle,
        opacity: 0.4
      })
    );
  });
}); 