import { screen, render } from '@testing-library/react';

import Button from './index';

describe('<Button />', () => {
  it('should be able to render the heading', () => {
    const { container } = render(<Button />);

    expect(
      screen.getByRole('heading', {
        name: 'Button',
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
