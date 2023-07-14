import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Quote from '../components/CalculatorPage';

describe('Should render as expected', () => {
  test('test render of quote page', () => {
    const { container } = render(
      <MemoryRouter>
        <Quote />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
