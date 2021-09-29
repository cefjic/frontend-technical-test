import { render } from "@testing-library/react";
import React from "react";
import Layout from "../components/layout/Layout";

describe("Layout component", () => {
  it("should render a component", () => {
    const { getByTestId } = render(
      <Layout>
        <div data-testid="content" />
      </Layout>
    );

    expect(getByTestId("content")).toBeTruthy();
    expect(getByTestId("layout-main")).toBeTruthy();
  });
});
