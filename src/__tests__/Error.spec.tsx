import { render } from "@testing-library/react";
import Error from "../components/error/Error";

describe("Error component", () => {
  it("should render a component", () => {
    const { getByTestId } = render(<Error status={404} />);

    expect(getByTestId("error-title").textContent).toBe("errors.404.title");
    expect(getByTestId("error-subtitle").textContent).toBe(
      "errors.404.subtitle"
    );
  });
});
