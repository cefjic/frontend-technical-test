import { FC } from "react";
import { getUsers } from "../utils/users";
import { User } from "../types/user";
import { Conversation } from "../types/conversation";
import { getLoggedUserConversations } from "../utils/conversations";
import Navigation from "../components/navigation/Navigation";

interface OwnProps {
  users: User[];
  conversations: Conversation[];
}

const Home: FC<OwnProps> = ({ users, conversations }) => (
  <Navigation users={users} conversations={conversations} />
);

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
