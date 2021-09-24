import type { FC } from "react";
import Head from "next/head";
import { getUsers } from "../utils/users";
import { User } from "../types/user";
import axios from "axios";

interface OwnProps {
  users: User[];
}

const Home: FC<OwnProps> = ({ users }) => {
  return <div>{JSON.stringify(users)}</div>;
};

export async function getServerSideProps() {
  try {
    const { data } = await getUsers();
    return {
      props: {
        users: data,
      },
    };
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e;
    }
  }
  // Default return, empty props
  return {
    props: {
      users: [],
    },
  };
}

export default Home;
