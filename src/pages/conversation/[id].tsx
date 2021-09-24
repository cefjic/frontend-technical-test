import React, { FC, Fragment } from "react";
import Navigation from "../../components/navigation/Navigation";
import { Conversation } from "../../types/conversation";
import { User } from "../../types/user";
import { getLoggedUserConversations } from "../../utils/conversations";
import { getUsers } from "../../utils/users";

interface OwnProps {
  users: User[];
  conversations: Conversation[];
}

const ConversationWith: FC<OwnProps> = ({ users, conversations }) => {
  return (
    <Fragment>
      <Navigation users={users} conversations={conversations} />
      <div>Messages</div>
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

export default ConversationWith;
