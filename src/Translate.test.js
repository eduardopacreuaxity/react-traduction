import { render, screen } from '@testing-library/react';
import Translate from './Translate';

test('renders learn react link', () => {
  render(<Translate />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
