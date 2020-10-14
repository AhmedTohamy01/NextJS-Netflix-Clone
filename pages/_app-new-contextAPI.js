import React from "react";
import App from "next/app";
import Head from "next/head";
// import { FirebaseContext } from "../context/FirbaseContext";
// import { firebase } from "../lib/firebase.prod";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
