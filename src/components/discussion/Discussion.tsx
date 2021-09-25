import React, { FC, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { Conversation } from "../../types/conversation";
import { Message } from "../../types/message";
import { User } from "../../types/user";
import { fetcher } from "../../utils/http";
import { getPreviousMessage } from "../../utils/messages";
import Bubble from "./bubble/Bubble";
import { Wrapper } from "./Discussion.styles";
import Form from "./form/Form";
import { toast } from "react-toastify";

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

  const updateMessages = useCallback(() => {
    mutate().catch(() => toast.error(t("errors.messages.update")));
  }, [mutate, t]);

  useEffect(() => {
    const interval = window.setInterval(
      () => updateMessages(),
      REFRESH_INTERVAL
    );
    return window.clearInterval(interval);
  }, [updateMessages]);

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
      <Form conversation={conversation} onSubmit={updateMessages} />
    </Wrapper>
  );
};

export default Discussion;
