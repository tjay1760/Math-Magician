import { render, fireEvent } from '@testing-library/react';
import { InputButtons } from '../components/Buttons';

describe('InputButtons', () => {
  test('should render input buttons correctly', () => {
    const buttonClickHandlerMock = jest.fn();
    const { getByText } = render(<InputButtons buttonClickHandler={buttonClickHandlerMock} />);
  
    // Find all input buttons by their text content
    const acButton = getByText('AC');
    const plusMinusButton = getByText('+/-');
    const percentButton = getByText('%');
    const sevenButton = getByText('7');
    const eightButton = getByText('8');
    const nineButton = getByText('9');
    const fourButton = getByText('4');
    const fiveButton = getByText('5');
    const sixButton = getByText('6');
    const oneButton = getByText('1');
    const twoButton = getByText('2');
    const threeButton = getByText('3');
    const zeroButton = getByText('0');
    const dotButton = getByText('.');
  
    // Assert that all input buttons are rendered
    expect(acButton).toBeInTheDocument();
    expect(plusMinusButton).toBeInTheDocument();
    expect(percentButton).toBeInTheDocument();
    expect(sevenButton).toBeInTheDocument();
    expect(eightButton).toBeInTheDocument();
    expect(nineButton).toBeInTheDocument();
    expect(fourButton).toBeInTheDocument();
    expect(fiveButton).toBeInTheDocument();
    expect(sixButton).toBeInTheDocument();
    expect(oneButton).toBeInTheDocument();
    expect(twoButton).toBeInTheDocument();
    expect(threeButton).toBeInTheDocument();
    expect(zeroButton).toBeInTheDocument();
    expect(dotButton).toBeInTheDocument();
  });
  
  // Add more test cases as needed
});
