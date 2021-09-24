import { User } from "../types/user";
import axios, { AxiosResponse } from "axios";

export const getUsers = async (): Promise<AxiosResponse<User[]>> =>
  axios.get<User[]>(`${process.env.API_URL}/users`);
