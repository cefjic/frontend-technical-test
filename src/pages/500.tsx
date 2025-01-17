import React, { FC } from "react";
import Error from "../components/error/Error";

const ServerError: FC = () => {
  return <Error status={500} />;
};

export default ServerError;
