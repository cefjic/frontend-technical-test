import { act, render, waitForElementToBeRemoved } from "@testing-library/react";
import axios from "axios";
import Discussion from "../components/discussion/Discussion";
import { Message } from "../types/message";
import { User } from "../types/user";
import { DEFAULT_CONVERSATION } from "../utils/__tests__/conversations.spec";
import { DEFAULT_MESSAGE } from "../utils/__tests__/messages.spec";
import { SWRConfig } from "swr";
import React from "react";
import { DEFAULT_USER } from "../utils/__tests__/users.spec";

describe("Discussion", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  const DEFAULT_DISCUSSION_PROPS = {
    users: [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
    ],
    conversation: {
      ...DEFAULT_CONVERSATION,
      id: 1,
      senderId: 1,
      recipientId: 2,
    },
  };

  it("should render an error on fetch fail", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(() => {
      throw new Error("error");
    });

    const { getByTestId } = render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <Discussion {...DEFAULT_DISCUSSION_PROPS} />
      </SWRConfig>
    );

    expect(getByTestId("discussion-loader")).toBeTruthy();

    setTimeout(() => {
      expect(getByTestId("discussion-error")).toBeTruthy();
    }, 500);
  });

  it("should render a component", async () => {
    const messages: Message[] = [
      { ...DEFAULT_MESSAGE, id: 1, authorId: 1, conversationId: 1 },
      { ...DEFAULT_MESSAGE, id: 2, authorId: 1, conversationId: 1 },
      { ...DEFAULT_MESSAGE, id: 3, authorId: 2, conversationId: 1 },
    ];

    jest.spyOn(axios, "get").mockResolvedValueOnce({
      data: messages,
    });

    const { getByTestId, queryByTestId } = render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <Discussion {...DEFAULT_DISCUSSION_PROPS} />
      </SWRConfig>
    );

    expect(getByTestId("discussion-loader")).toBeTruthy();

    setTimeout(() => {
      expect(getByTestId("discussion-content")).toBeTruthy();
      expect(queryByTestId("bubble")).toHaveLength(3);
    }, 500);
  });
});
