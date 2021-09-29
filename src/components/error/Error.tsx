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
      <Title data-testid="error-title">{t(`errors.${status}.title`)}</Title>
      <Subtitle data-testid="error-subtitle">
        {t(`errors.${status}.subtitle`)}
      </Subtitle>
    </ErrorWrapper>
  );
};

export default Error;
