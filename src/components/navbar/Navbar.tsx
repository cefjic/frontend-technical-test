import Link from "next/link";
import React from "react";
import { Wrapper, Title } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <Title>Messenger</Title>
      </Link>
    </Wrapper>
  );
};

export default Navbar;
