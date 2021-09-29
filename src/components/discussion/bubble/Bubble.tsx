import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Message } from "../../../types/message";
import { User } from "../../../types/user";
import { getUserFromList, isLoggedUser } from "../../../utils/users";
import { Author, MessageBubble, Wrapper, Layout } from "./Bubble.styles";

interface OwnProps {
  users: User[];
  message: Message;
  previousMessage?: Message;
}

const Bubble: FC<OwnProps> = ({ users, message, previousMessage }) => {
  const { t } = useTranslation();

  const { authorId, body } = message;
  const hasSamePreviousAuthor = authorId === previousMessage?.authorId;
  const isCurrentUser = isLoggedUser(authorId);
  const user = getUserFromList(users, authorId);

  return (
    <Wrapper
      data-testid={`logged-${isCurrentUser}--same-${hasSamePreviousAuthor}`}
      hasSamePreviousAuthor={hasSamePreviousAuthor}
      isLoggedUser={isCurrentUser}
    >
      <Layout data-testid="bubble-layout">
        {!hasSamePreviousAuthor && user && (
          <Author isLoggedUser={isCurrentUser}>
            {isCurrentUser ? t("you") : user.nickname}
          </Author>
        )}
        <MessageBubble
          isLoggedUser={isCurrentUser}
          hasSamePreviousAuthor={hasSamePreviousAuthor}
          data-testid="bubble-body"
        >
          {body}
        </MessageBubble>
      </Layout>
    </Wrapper>
  );
};

export default Bubble;
