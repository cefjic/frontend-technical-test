import { Message } from "../types/message";
import { getPreviousMessage } from "../utils/messages";

const DEFAULT_MESSAGE: Message = {
  id: 0,
  conversationId: 0,
  authorId: 0,
  timestamp: Date.now(),
  body: "",
};

describe("getPreviousMessage", () => {
  it("should get previous message from list with multiple items", () => {
    const list: Message[] = [
      { ...DEFAULT_MESSAGE, id: 1 },
      { ...DEFAULT_MESSAGE, id: 2 },
      { ...DEFAULT_MESSAGE, id: 3 },
      { ...DEFAULT_MESSAGE, id: 4 },
      { ...DEFAULT_MESSAGE, id: 5 },
    ];
    expect(getPreviousMessage(list, 4)).toEqual(list[2]);
  });

  it("should not found previous message from list with one item", () => {
    const list: Message[] = [{ ...DEFAULT_MESSAGE, id: 1 }];
    expect(getPreviousMessage(list, 1)).toEqual(undefined);
  });

  it("should not found previous message from empty list", () => {
    expect(getPreviousMessage([], 3)).toEqual(undefined);
  });
});
