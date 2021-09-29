import { render } from "@testing-library/react";
import React from "react";
import Navbar from "../components/navbar/Navbar";

describe("Layout component", () => {
  it("should render a component", () => {
    const { container } = render(<Navbar />);

    expect(container).toMatchSnapshot();
  });
});
