import { render } from '@testing-library/react';
import Quote from '../components/DisplayQuote';

describe('Should render as expected', () => {
  test('test render of qoute page', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });
});
