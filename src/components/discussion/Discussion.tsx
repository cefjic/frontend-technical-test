import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { Conversation } from "../../types/conversation";
import { Message } from "../../types/message";
import { User } from "../../types/user";
import { fetcher } from "../../utils/http";
import { getPreviousMessage } from "../../utils/messages";
import Bubble from "./bubble/Bubble";
import { BubbleWrapper, Wrapper } from "./Discussion.styles";
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
  const bubbleWrapperRef = useRef<HTMLDivElement>(null);

  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>(`${process.env.API_URL}/messages/${id}`, fetcher);

  const scrollToDown = () => {
    if (bubbleWrapperRef.current) {
      bubbleWrapperRef.current.scrollTop =
        bubbleWrapperRef.current.scrollHeight;
    }
  };

  const updateMessages = useCallback(
    (withScroll = true) => {
      mutate()
        .then(() => {
          if (withScroll) {
            scrollToDown();
          }
        })
        .catch(() => toast.error(t("errors.messages.update")));
    },
    [mutate, t]
  );

  // Scroll to end of BubbleWrapper to show last messages first
  useEffect(() => {
    /**
     * I need to set the scroll on timeout to prevent no bubbleWrapperRef.
     * In effect, bubbleWrapperRef.current change will no trigger this useEffect.
     */
    const timeout = window.setTimeout(scrollToDown, 50);

    return () => window.clearTimeout(timeout);
  }, [bubbleWrapperRef]);

  useEffect(() => {
    const interval = window.setInterval(
      () => updateMessages(false),
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
      <BubbleWrapper ref={bubbleWrapperRef}>
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
      </BubbleWrapper>
      <Form conversation={conversation} onSubmit={updateMessages} />
    </Wrapper>
  );
};

export default Discussion;
