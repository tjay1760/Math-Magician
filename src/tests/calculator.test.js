import { render } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Should render as expected', () => {
  test('test render of calculator page', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
