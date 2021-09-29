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
  const router = useRouter();
  const user = getOtherUserFromConversation(users, conversation);

  if (!user) {
    return <Fragment />;
  }

  const routerId = router?.query.id;
  const { id } = conversation;
  const { nickname } = user;
  const firstNicknameChar = getFirstCharacter(nickname);
  const isCurrentConversation = id === parseInt(`${routerId}`);

  return (
    <Link href={`/conversation/${id}`} passHref>
      <Layout
        isCurrent={isCurrentConversation}
        data-testid={
          isCurrentConversation ? "current-conversation" : "conversation"
        }
      >
        <Icon data-testid="conv-icon">{firstNicknameChar}</Icon>
        <Name data-testid="conv-nickname">{nickname}</Name>
      </Layout>
    </Link>
  );
};

export default ConversationNav;
