import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgBL2iZcL0t0OYRwNSCdCgq5e-pEEzCio",
  authDomain: "healthcare-b9190.firebaseapp.com",
  projectId: "healthcare-b9190",
  storageBucket: "healthcare-b9190.appspot.com",
  messagingSenderId: "127452904795",
  appId: "1:127452904795:web:867780a0457c0ca4506e7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export default { app, provider, auth };
