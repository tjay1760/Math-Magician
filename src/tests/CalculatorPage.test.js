import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Calculator from '../components/CalculatorPage';

describe('Should render as expected', () => {
  test('test render of quote page', () => {
    const { container } = render(
      <MemoryRouter>
        <Calculator />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
