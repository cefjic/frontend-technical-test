import React, { FC } from "react";
import { ErrorWrapper, Subtitle, Title } from "./error.styles";
import { useTranslation } from "react-i18next";

const Error: FC = () => {
  const { t } = useTranslation();

  return (
    <ErrorWrapper>
      <Title>{t("errors.server.title")}</Title>
      <Subtitle>{t("errors.server.subtitle")}</Subtitle>
    </ErrorWrapper>
  );
};

export default Error;
