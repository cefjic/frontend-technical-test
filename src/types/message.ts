export interface Message {
  id: number;
  conversationId: number;
  authorId: number;
  timestamp: number;
  body: string;
}

export type MessageWithoutId = Omit<Message, "id">;
