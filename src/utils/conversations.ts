import axios, { AxiosResponse } from "axios";
import { Conversation } from "../types/conversation";
import { User } from "../types/user";
import { getLoggedUserId } from "./getLoggedUserId";

export const getLoggedUserConversations = async () =>
  getUserConversations(getLoggedUserId());

export const getUserConversations = async (
  userId: User["id"]
): Promise<AxiosResponse<Conversation[]>> =>
  axios.get<Conversation[]>(`${process.env.API_URL}/conversations/${userId}`);
