import type { FC } from "react";
import Head from "next/head";
import { getUsers } from "../utils/users";
import { User } from "../types/user";
import axios from "axios";
import { Conversation } from "../types/conversation";
import { getLoggedUserConversations } from "../utils/conversations";

interface OwnProps {
  users: User[];
  conversations: Conversation[];
}

const Home: FC<OwnProps> = ({ users }) => {
  return <div>{JSON.stringify(users)}</div>;
};

export async function getServerSideProps() {
  try {
    const { data: users } = await getUsers();
    const { data: conversations } = await getLoggedUserConversations();
    return {
      props: {
        users,
        conversations,
      },
    };
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e;
    }
  }
  // Default return, empty props
  return {
    props: {
      users: [],
      conversations: [],
    },
  };
}

export default Home;
