import { Conversation } from "../types/conversation";
import { getConversationFromList } from "../utils/conversations";

export const DEFAULT_CONVERSATION: Conversation = {
  id: 0,
  recipientId: 1,
  recipientNickname: "test",
  senderId: 2,
  senderNickname: "Test 2",
  lastMessageTimestamp: Date.now(),
};

describe("getConversationFromList", () => {
  it("should return conversation from list with multiple items", () => {
    const list: Conversation[] = [
      { ...DEFAULT_CONVERSATION, id: 1 },
      { ...DEFAULT_CONVERSATION, id: 2 },
      { ...DEFAULT_CONVERSATION, id: 3 },
      { ...DEFAULT_CONVERSATION, id: 4 },
    ];
    expect(getConversationFromList(list, 2)).toEqual(list[1]);
  });

  it("should return conversation from list with one item", () => {
    const list: Conversation[] = [{ ...DEFAULT_CONVERSATION, id: 2 }];
    expect(getConversationFromList(list, 2)).toEqual(list[0]);
  });

  it("should not found conversation from empty list", () => {
    expect(getConversationFromList([], 5)).toEqual(undefined);
  });
});
