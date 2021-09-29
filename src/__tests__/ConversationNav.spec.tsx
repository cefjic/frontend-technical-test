import { getFirstCharacter } from "../components/navigation/conversationNav/ConversationNav.utils";
import { render, cleanup } from "@testing-library/react";
import ConversationNav from "../components/navigation/conversationNav/ConversationNav";
import { User } from "../types/user";
import { DEFAULT_USER } from "./users.spec";
import { DEFAULT_CONVERSATION } from "./conversations.spec";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

afterAll(cleanup);

describe("getFirstCharacter", () => {
  it("should return first character from string", () => {
    expect(getFirstCharacter("bonjour")).toEqual("b");
    expect(getFirstCharacter("")).toEqual("");
    expect(getFirstCharacter("a")).toEqual("a");
  });
});

describe("ConversationNav component", () => {
  it("should render a component with correct values and who be current conversation", () => {
    useRouter.mockImplementationOnce(() => ({
      asPath: "/",
      query: {
        id: "1",
      },
    }));

    const users: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
    ];

    const { getByTestId } = render(
      <ConversationNav
        users={users}
        conversation={{
          ...DEFAULT_CONVERSATION,
          id: 1,
          senderId: 1,
          recipientId: 2,
        }}
      />
    );

    expect(getByTestId("current-conversation")).toBeTruthy();
    expect(getByTestId("conv-nickname").textContent).toBe("test");
    expect(getByTestId("conv-icon").textContent).toBe("t");
  });

  it("should render a component with correct values and who be other conversation", () => {
    useRouter.mockImplementationOnce(() => ({
      asPath: "/",
      query: {
        id: "2",
      },
    }));

    const users: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
    ];

    const { getByTestId } = render(
      <ConversationNav
        users={users}
        conversation={{
          ...DEFAULT_CONVERSATION,
          id: 1,
          senderId: 1,
          recipientId: 2,
        }}
      />
    );

    expect(getByTestId("conversation")).toBeTruthy();
  });

  it("should render a fragment", () => {
    useRouter.mockImplementationOnce(() => ({
      asPath: "/",
      query: {
        id: "1",
      },
    }));

    const users: User[] = [];

    const { queryByTestId } = render(
      <ConversationNav
        users={users}
        conversation={{
          ...DEFAULT_CONVERSATION,
          id: 1,
          senderId: 1,
          recipientId: 2,
        }}
      />
    );

    expect(queryByTestId("conversation")).toBeNull();
    expect(queryByTestId("current-conversation")).toBeNull();
  });
});
