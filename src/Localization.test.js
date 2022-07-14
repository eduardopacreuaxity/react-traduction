import { render, screen } from '@testing-library/react';
import Localization from './Localization';

test('renders learn react link', () => {
  render(<Localization />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
