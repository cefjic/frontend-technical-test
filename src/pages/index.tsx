import { FC, Fragment } from "react";
import Head from "next/head";
import { getUsers } from "../utils/users";
import { User } from "../types/user";
import axios from "axios";
import { Conversation } from "../types/conversation";
import { getLoggedUserConversations } from "../utils/conversations";
import Navigation from "../components/navigation/Navigation";

interface OwnProps {
  users: User[];
  conversations: Conversation[];
}

const Home: FC<OwnProps> = ({ users, conversations }) => {
  return (
    <Fragment>
      <Navigation users={users} conversations={conversations} />
    </Fragment>
  );
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
    throw e;
  }
}

export default Home;
