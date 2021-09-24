import React, { FC } from "react";
import { Conversation } from "../../types/conversation";
import { User } from "../../types/user";
import ConversationNav from "./conversationNav/ConversationNav";
import { List, Wrapper } from "./Navigation.styles";

interface OwnProps {
  users: User[];
  conversations: Conversation[];
}

const Navigation: FC<OwnProps> = ({ users, conversations }) => {
  return (
    <Wrapper>
      <List>
        {conversations.map((conversation) => (
          <ConversationNav
            users={users}
            conversation={conversation}
            key={conversation.id}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default Navigation;
