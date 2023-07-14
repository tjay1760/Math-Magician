import { render } from '@testing-library/react';
import { OperationButtons } from '../components/Buttons';

describe('OperationButtons', () => {
  test('should render operation buttons correctly', () => {
    const buttonClickHandlerMock = jest.fn();
    const { getByText } = render(<OperationButtons buttonClickHandler={buttonClickHandlerMock} />);
  
    // Find all operation buttons by their text content
    const divideButton = getByText('÷');
    const multiplyButton = getByText('x');
    const subtractButton = getByText('-');
    const addButton = getByText('+');
    const equalsButton = getByText('=');
  
    // Assert that all operation buttons are rendered
    expect(divideButton).toBeInTheDocument();
    expect(multiplyButton).toBeInTheDocument();
    expect(subtractButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(equalsButton).toBeInTheDocument();
  });
  
  // Add more test cases as needed
});
