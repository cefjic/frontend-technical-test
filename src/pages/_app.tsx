import type { AppProps } from "next/app";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import "../styles/globals.css";
import "../translations/i18n";
import React, { Fragment } from "react";
import Head from "next/head";

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
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
