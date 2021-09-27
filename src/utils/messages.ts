import axios, { AxiosResponse } from "axios";
import { Message, MessageWithoutId } from "../types/message";

export const getPreviousMessage = (
  messages: Message[],
  messageId: Message["id"]
): Message | undefined =>
  messages.find((_, index) => messages[index + 1]?.id === messageId);

type MessageId = Pick<Message, "id">;

export const sendNewMessage = (
  message: MessageWithoutId
): Promise<AxiosResponse<MessageId>> =>
  axios.post<MessageId>(
    `${process.env.API_URL}/messages/${message.conversationId}`,
    message
  );
