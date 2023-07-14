import { render } from '@testing-library/react';
import ScreenOutput from '../components/Output';

describe('ScreenOutput', () => {
  test('should render the ScreenOutput component correctly', () => {
    const calculatorState = {
      next: null,
      total: 0,
    };

    const { container } = render(<ScreenOutput calculatorState={calculatorState} />);

    expect(container).toMatchSnapshot();
  });

  // Add more test cases as needed
});
