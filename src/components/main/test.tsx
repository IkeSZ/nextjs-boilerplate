import { screen, render } from '@testing-library/react';

import Main from './index';

describe('<Main />', () => {
  it('should be able to render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', {
        name: /react avançado/i,
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      background: '#06092b',
      color: '#fff',
    });
  });
});
