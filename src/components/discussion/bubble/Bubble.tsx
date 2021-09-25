import React, { FC } from "react";
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
  const { authorId, body } = message;
  const hasSamePreviousAuthor = authorId === previousMessage?.authorId;
  const isCurrentUser = isLoggedUser(authorId);
  const user = getUserFromList(users, authorId);

  return (
    <Wrapper isLoggedUser={isCurrentUser}>
      <Layout>
        {!hasSamePreviousAuthor && user && (
          <Author isLoggedUser={isCurrentUser}>{user.nickname}</Author>
        )}
        <MessageBubble
          isLoggedUser={isCurrentUser}
          hasSamePreviousAuthor={hasSamePreviousAuthor}
        >
          {body}
        </MessageBubble>
      </Layout>
    </Wrapper>
  );
};

export default Bubble;
