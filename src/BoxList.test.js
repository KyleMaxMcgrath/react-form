import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('renders', () => {
  render(<BoxList />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("handles adding boxes correctly", () => {
    const {getByText, getAllByTestId} = render(<BoxList />);
    const addButton = getByText("Add Box");
    fireEvent.click(addButton);
    const box = getAllByTestId("box");
    expect(box[0]).toBeInTheDocument();
});

it("handles removing boxes correctly", () => {
    const {getByText, getAllByText, getAllByTestId} = render(<BoxList />);
    const addButton = getByText("Add Box");
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const removeButtons = getAllByText("X");
    const boxes = getAllByTestId("box");
    for(let box of boxes)
        expect(box).toBeInTheDocument();

    for(let button of removeButtons)
        fireEvent.click(button);

    for(let box of boxes)
        expect(box).not.toBeInTheDocument();
});