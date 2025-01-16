import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjRMfTpMrgmUmujg8s0m-sma5gvN6P9Yc",
  authDomain: "fir-auth-e3d61.firebaseapp.com",
  projectId: "fir-auth-e3d61",
  storageBucket: "fir-auth-e3d61.firebasestorage.app",
  messagingSenderId: "932680652294",
  appId: "1:932680652294:web:0a99900b44831a60955587"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth }