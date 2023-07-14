import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Should render as expected', () => {
  test('test render of quote page', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
