import type { AppProps } from "next/app";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import "../translations/i18n";
import React, { Fragment } from "react";
import Head from "next/head";
import TopBar from "../components/navbar/Navbar";
import Layout from "../components/layout/Layout";
import { GlobalStyle } from "../styles/bootstrap/theme";

// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name="description"
          content="Frontend exercise for developpers who want to join us on leboncoin.fr"
        />
      </Head>
      <GlobalStyle />
      <TopBar />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Fragment>
  );
}

export default MyApp;
