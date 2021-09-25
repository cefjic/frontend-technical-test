import { render, cleanup } from "@testing-library/react";
import App from "../pages";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

afterAll(cleanup);

describe("App", () => {
  it("should render correctly App", () => {
    useRouter.mockImplementationOnce(() => ({
      asPath: "/",
    }));

    const { container } = render(<App users={[]} conversations={[]} />);
    expect(container).toMatchSnapshot();
  });
});
