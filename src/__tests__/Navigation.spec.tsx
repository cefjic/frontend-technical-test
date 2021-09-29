import { render } from "@testing-library/react";
import Navigation from "../components/navigation/Navigation";
import { Conversation } from "../types/conversation";
import { User } from "../types/user";
import { DEFAULT_CONVERSATION } from "../utils/__tests__/conversations.spec";
import { DEFAULT_USER } from "../utils/__tests__/users.spec";
import React from "react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("ConversationNav component", () => {
  it("should render a Fragment", () => {
    useRouter.mockImplementationOnce(() => ({
      asPath: "/conversation",
      query: {
        id: "1",
      },
    }));

    const users: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
      { ...DEFAULT_USER, id: 3 },
    ];

    const conversations: Conversation[] = [
      { ...DEFAULT_CONVERSATION, id: 1, senderId: 1, recipientId: 2 },
      { ...DEFAULT_CONVERSATION, id: 2, senderId: 1, recipientId: 3 },
    ];

    const { queryByTestId } = render(
      <Navigation users={users} conversations={conversations} />
    );

    expect(queryByTestId("nav-wrapper")).toBeFalsy();
  });

  it("should render a component", () => {
    useRouter.mockImplementationOnce(() => ({
      asPath: "/",
      query: {
        id: "1",
      },
    }));

    const users: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
      { ...DEFAULT_USER, id: 3 },
    ];

    const conversations: Conversation[] = [
      { ...DEFAULT_CONVERSATION, id: 1, senderId: 1, recipientId: 2 },
      { ...DEFAULT_CONVERSATION, id: 2, senderId: 1, recipientId: 3 },
    ];

    const { getByTestId } = render(
      <Navigation users={users} conversations={conversations} />
    );

    expect(getByTestId("nav-2")).toBeTruthy();
  });
});
