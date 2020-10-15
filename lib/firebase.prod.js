import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDGo6kp109xeICmLZbhzW2A9752ymqUG00",
  authDomain: "netflix-nextjs.firebaseapp.com",
  databaseURL: "https://netflix-nextjs.firebaseio.com",
  projectId: "netflix-nextjs",
  storageBucket: "netflix-nextjs.appspot.com",
  messagingSenderId: "177650865431",
  appId: "1:177650865431:web:44b94e85681ac534369352",
  measurementId: "G-WWL518Q0PP",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
