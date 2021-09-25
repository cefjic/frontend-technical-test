import { GetServerSidePropsContext } from "next";
import React, { FC, Fragment } from "react";
import Discussion from "../../components/discussion/Discussion";
import Navigation from "../../components/navigation/Navigation";
import { Conversation } from "../../types/conversation";
import { User } from "../../types/user";
import {
  getConversationFromList,
  getLoggedUserConversations,
} from "../../utils/conversations";
import { getUserFromList, getUsers } from "../../utils/users";

interface OwnProps {
  users: User[];
  conversations: Conversation[];
  currentConversation: Conversation;
}

const ConversationWith: FC<OwnProps> = ({
  users,
  conversations,
  currentConversation,
}) => {
  return (
    <Fragment>
      <Navigation users={users} conversations={conversations} />
      <Discussion users={users} conversation={currentConversation} />
    </Fragment>
  );
};

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  try {
    const { data: conversations } = await getLoggedUserConversations();
    const currentConversation = getConversationFromList(
      conversations,
      parseInt(`${params?.id}`)
    );

    if (!currentConversation) {
      return {
        notFound: true,
      };
    }

    const { data: users } = await getUsers();

    return {
      props: {
        users,
        conversations,
        currentConversation,
      },
    };
  } catch (e) {
    throw e;
  }
}

export default ConversationWith;
