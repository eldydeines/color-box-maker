import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

// smoke test
it("Box renders without crashing", function () {
    render(<Box />);
});

// snapshot test
it("Box matches snapshot", function () {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});