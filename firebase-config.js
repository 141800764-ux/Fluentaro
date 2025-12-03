// firebase-config.js
// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwVkvB5J2AZNGbDy08oWSyl7GojsdKHHo",
  authDomain: "fluentaro.firebaseapp.com",
  projectId: "fluentaro",
  storageBucket: "fluentaro.firebasestorage.app",
  messagingSenderId: "197259430812",
  appId: "1:197259430812:web:67b388300a05671d635659",
  measurementId: "G-JC7L513JNR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

