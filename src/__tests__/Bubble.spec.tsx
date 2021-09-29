import { render } from "@testing-library/react";
import Bubble from "../components/discussion/bubble/Bubble";
import { User } from "../types/user";
import { DEFAULT_MESSAGE } from "../utils/__tests__/messages.spec";
import { DEFAULT_USER } from "../utils/__tests__/users.spec";

describe("Bubble component", () => {
  it("should render a component", () => {
    const users: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
      { ...DEFAULT_USER, id: 3 },
    ];

    const { getByTestId } = render(
      <Bubble
        users={users}
        message={{ ...DEFAULT_MESSAGE, id: 1, body: "test" }}
      />
    );

    expect(getByTestId("bubble-body").textContent).toBe("test");
    expect(getByTestId("bubble-layout")).toBeTruthy();
    expect(getByTestId("logged-false--same-false")).toBeTruthy();
  });

  it("should render a logged user bubble", () => {
    const users: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
      { ...DEFAULT_USER, id: 3 },
    ];

    const { getByTestId } = render(
      <Bubble
        users={users}
        message={{ ...DEFAULT_MESSAGE, id: 1, body: "test", authorId: 1 }}
      />
    );

    expect(getByTestId("bubble-body").textContent).toBe("test");
    expect(getByTestId("bubble-layout")).toBeTruthy();
    expect(getByTestId("logged-true--same-false")).toBeTruthy();
  });

  it("should render a logged user bubble with previous message from same author", () => {
    const users: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
      { ...DEFAULT_USER, id: 3 },
    ];

    const { getByTestId } = render(
      <Bubble
        users={users}
        message={{ ...DEFAULT_MESSAGE, id: 1, body: "test", authorId: 1 }}
        previousMessage={{
          ...DEFAULT_MESSAGE,
          id: 2,
          body: "test",
          authorId: 1,
        }}
      />
    );

    expect(getByTestId("bubble-body").textContent).toBe("test");
    expect(getByTestId("bubble-layout")).toBeTruthy();
    expect(getByTestId("logged-true--same-true")).toBeTruthy();
  });

  it("should render a logged user bubble with previous message from other author", () => {
    const users: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
      { ...DEFAULT_USER, id: 3 },
    ];

    const { getByTestId } = render(
      <Bubble
        users={users}
        message={{ ...DEFAULT_MESSAGE, id: 1, body: "test", authorId: 1 }}
        previousMessage={{
          ...DEFAULT_MESSAGE,
          id: 2,
          body: "test",
          authorId: 2,
        }}
      />
    );

    expect(getByTestId("bubble-body").textContent).toBe("test");
    expect(getByTestId("bubble-layout")).toBeTruthy();
    expect(getByTestId("logged-true--same-false")).toBeTruthy();
  });
});
