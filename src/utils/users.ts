import { User } from "../types/user";
import axios, { AxiosResponse } from "axios";
import { Conversation } from "../types/conversation";
import { getLoggedUserId } from "./getLoggedUserId";

export const getUsers = async (): Promise<AxiosResponse<User[]>> =>
  axios.get<User[]>(`${process.env.API_URL}/users`);

export const getUserFromList = (users: User[], userId: User["id"]) =>
  users.find(({ id }) => id === userId);

export const getOtherUserFromConversation = (
  users: User[],
  conversation: Conversation
): User | undefined => {
  const loggedUserId = getLoggedUserId();
  const { recipientId, senderId } = conversation;
  return getUserFromList(
    users,
    recipientId === loggedUserId ? senderId : recipientId
  );
};

export const isLoggedUser = (userId: User["id"]): boolean =>
  userId === getLoggedUserId();
