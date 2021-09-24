import React, { FC, Fragment } from "react";
import Link from "next/link";
import { Conversation } from "../../../types/conversation";
import { User } from "../../../types/user";
import { getOtherUserFromConversation } from "../../../utils/users";
import { Name, Layout, Icon } from "./ConversationNav.styles";
import { getFirstCharacter } from "./ConversationNav.utils";

interface OwnProps {
  users: User[];
  conversation: Conversation;
}

const ConversationNav: FC<OwnProps> = ({ users, conversation }) => {
  const user = getOtherUserFromConversation(conversation, users);

  if (!user) {
    return <Fragment />;
  }

  const { nickname, id } = user;
  const firstChar = getFirstCharacter(nickname);

  return (
    <Link href={`/conversation/${id}`} passHref>
      <Layout>
        <Icon>{firstChar}</Icon>
        <Name>{nickname}</Name>
      </Layout>
    </Link>
  );
};

export default ConversationNav;
