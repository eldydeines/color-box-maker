import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// smoke test
it("BoxList renders without crashing", function () {
    render(<BoxList />);
});

// snapshot test
it("BoxList matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
    const { queryByText, getByTestId } = render(<BoxList />);

    const input = getByTestId('height');
    const btn = queryByText("Add Box");

    expect(input).toBeEmpty; // empty select

    fireEvent.change(input, { target: { height: '100px' } });
    fireEvent.click(btn);
    expect(queryByText(`height: '100px'`)).toBeInTheDocument;
})