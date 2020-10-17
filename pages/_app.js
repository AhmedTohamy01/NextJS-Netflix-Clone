import '../styles/globals.css'
import { FirebaseContext } from "../context/FirbaseContext";
import firebase from "../lib/firebase.prod";


function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={ firebase }>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp
