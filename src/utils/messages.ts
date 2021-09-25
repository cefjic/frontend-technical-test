import { Message } from "../types/message";

export const getPreviousMessage = (
  messageId: Message["id"],
  messages: Message[]
): Message | undefined =>
  messages.find((_, index) => messages[index + 1]?.id === messageId);
