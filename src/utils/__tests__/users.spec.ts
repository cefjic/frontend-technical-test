import { Conversation } from "../../types/conversation";
import { User } from "../../types/user";
import {
  getOtherUserFromConversation,
  getUserFromList,
  isLoggedUser,
} from "../users";
import { DEFAULT_CONVERSATION } from "./conversations.spec";

export const DEFAULT_USER: User = {
  id: 0,
  nickname: "test",
  token: "xxxx",
};

describe("getUserFromList", () => {
  it("should find user from list with multiple items", () => {
    const list: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
      { ...DEFAULT_USER, id: 3 },
      { ...DEFAULT_USER, id: 4 },
      { ...DEFAULT_USER, id: 5 },
    ];
    expect(getUserFromList(list, 2)).toEqual(list[1]);
  });

  it("should find user from list with one item", () => {
    const list: User[] = [{ ...DEFAULT_USER, id: 1 }];
    expect(getUserFromList(list, 1)).toEqual(list[0]);
  });

  it("should not find user from empty list", () => {
    expect(getUserFromList([], 10)).toEqual(undefined);
  });
});

describe("isLoggedUser", () => {
  it("should return true", () => {
    expect(isLoggedUser(1)).toEqual(true);
  });

  it("should return false", () => {
    expect(isLoggedUser(2)).toEqual(false);
  });
});

describe("getOtherUserFromConversation", () => {
  it("should find user from conversation from sender id", () => {
    const conversation: Conversation = {
      ...DEFAULT_CONVERSATION,
      recipientId: 1, // me
      senderId: 2, // other
    };
    const users: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
      { ...DEFAULT_USER, id: 3 },
      { ...DEFAULT_USER, id: 4 },
      { ...DEFAULT_USER, id: 5 },
    ];
    expect(getOtherUserFromConversation(users, conversation)).toEqual(users[1]);
  });

  it("should find user from conversation from recipient id", () => {
    const conversation: Conversation = {
      ...DEFAULT_CONVERSATION,
      recipientId: 2, // other
      senderId: 1, // me
    };
    const users: User[] = [
      { ...DEFAULT_USER, id: 1 },
      { ...DEFAULT_USER, id: 2 },
      { ...DEFAULT_USER, id: 3 },
      { ...DEFAULT_USER, id: 4 },
      { ...DEFAULT_USER, id: 5 },
    ];
    expect(getOtherUserFromConversation(users, conversation)).toEqual(users[1]);
  });

  it("should not find user from conversation", () => {
    const conversation: Conversation = {
      ...DEFAULT_CONVERSATION,
      recipientId: 1, // me
      senderId: 2, // other
    };
    const users: User[] = [];
    expect(getOtherUserFromConversation(users, conversation)).toEqual(
      undefined
    );
  });
});
