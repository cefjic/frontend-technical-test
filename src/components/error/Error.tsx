import React, { FC } from "react";
import { ErrorWrapper, Subtitle, Title } from "./error.styles";
import { useTranslation } from "react-i18next";

interface OwnProps {
  status: number;
}

const Error: FC<OwnProps> = ({ status }) => {
  const { t } = useTranslation();

  return (
    <ErrorWrapper>
      <Title>{t(`errors.${status}.title`)}</Title>
      <Subtitle>{t(`errors.${status}.subtitle`)}</Subtitle>
    </ErrorWrapper>
  );
};

export default Error;
