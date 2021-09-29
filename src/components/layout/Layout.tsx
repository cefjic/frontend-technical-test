import React, { FC } from "react";
import { Main } from "./Layout.styles";

const Layout: FC = ({ children }) => (
  <Main data-testid="layout-main">{children}</Main>
);

export default Layout;
