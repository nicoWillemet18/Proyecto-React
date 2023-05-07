import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCx_17OD-S1DpDZz5hv0nfMHShCIuNXhlI",
  authDomain: "cakevill-523d0.firebaseapp.com",
  projectId: "cakevill-523d0",
  storageBucket: "cakevill-523d0.appspot.com",
  messagingSenderId: "146732627518",
  appId: "1:146732627518:web:d2fe756cc670da5759836f"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app