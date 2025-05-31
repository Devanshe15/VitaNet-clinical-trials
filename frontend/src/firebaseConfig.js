// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqSJI8InCOdmtwubPuLmVvbi4oU4RCR8c",
    authDomain: "vitanet-clinicaltrials.firebaseapp.com",
    projectId: "vitanet-clinicaltrials",
    storageBucket: "vitanet-clinicaltrials.appspot.com",
    messagingSenderId: "700362108755",
    appId: "1:700362108755:web:352bf624486fbd28dffba6",
    measurementId: "G-SPXR7LRFJ2"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
