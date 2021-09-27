import React, { FC, Fragment } from "react";
import Link from "next/link";
import { Conversation } from "../../../types/conversation";
import { User } from "../../../types/user";
import { getOtherUserFromConversation } from "../../../utils/users";
import { Name, Layout, Icon } from "./ConversationNav.styles";
import { getFirstCharacter } from "./ConversationNav.utils";
import { useRouter } from "next/dist/client/router";
import { DateTime } from "luxon";

interface OwnProps {
  users: User[];
  conversation: Conversation;
}

const ConversationNav: FC<OwnProps> = ({ users, conversation }) => {
  const { query } = useRouter();
  const user = getOtherUserFromConversation(users, conversation);

  if (!user) {
    return <Fragment />;
  }

  const { id: routerId } = query;
  const { id } = conversation;
  const { nickname } = user;
  const firstNicknameChar = getFirstCharacter(nickname);
  const isCurrentConversation = id === parseInt(`${routerId}`);

  return (
    <Link href={`/conversation/${id}`} passHref>
      <Layout isCurrent={isCurrentConversation}>
        <Icon>{firstNicknameChar}</Icon>
        <Name>{nickname}</Name>
      </Layout>
    </Link>
  );
};

export default ConversationNav;
