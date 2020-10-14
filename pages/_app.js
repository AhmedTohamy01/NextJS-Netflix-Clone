import React from "react";
import App from "next/app";
import Head from "next/head";
// import { FirebaseContext } from "../context/FirbaseContext";
// import { firebase } from "../lib/firebase.prod";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflix NEXT.JS</title>
        <meta charset="utf-8" />
        <meta name="description" content="Netflix Clone Built Using NEXT.JS" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
