import { render } from '@testing-library/react';
import Box from './Box';

test('renders', () => {
  render(<Box />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});