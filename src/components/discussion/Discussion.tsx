import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { Conversation } from "../../types/conversation";
import { Message } from "../../types/message";
import { User } from "../../types/user";
import { fetcher } from "../../utils/http";
import { getPreviousMessage } from "../../utils/messages";
import Bubble from "./bubble/Bubble";
import { Wrapper } from "./Discussion.styles";

interface OwnProps {
  users: User[];
  conversation: Conversation;
}

// Refresh interval = 1s
const REFRESH_INTERVAL = 1000;

const Discussion: FC<OwnProps> = ({ users, conversation }) => {
  const { id } = conversation;

  const { t } = useTranslation();

  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>(`${process.env.API_URL}/messages/${id}`, fetcher);

  useEffect(() => {
    const interval = window.setInterval(() => mutate(), REFRESH_INTERVAL);
    return window.clearInterval(interval);
  }, [mutate]);

  if (!messages && !error) {
    // TODO : improve loading UI with loader
    return <Wrapper>{t("loading")}</Wrapper>;
  }

  if (!messages || error) {
    // TODO : improve error UI with beautiful card
    return <Wrapper>{t("errors.message.loading")}</Wrapper>;
  }

  return (
    <Wrapper>
      {messages.map((message) => {
        const { id } = message;
        return (
          <Bubble
            users={users}
            message={message}
            previousMessage={getPreviousMessage(id, messages)}
            key={id}
          />
        );
      })}
    </Wrapper>
  );
};

export default Discussion;
