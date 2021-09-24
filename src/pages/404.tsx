import React, { FC } from "react";
import Error from "../components/error/Error";

const ServerError: FC = () => {
  return <Error status={404} />;
};

export default ServerError;
