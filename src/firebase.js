import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKHNXGJzlyzEsrZGcldZRSzVP3JU--CvQ",
  authDomain: "shop-a310d.firebaseapp.com",
  projectId: "shop-a310d",
  storageBucket: "shop-a310d.appspot.com",
  messagingSenderId: "655066609973",
  appId: "1:655066609973:web:1b7f4c6da7e90d4b57f47c"
};

const app = initializeApp(firebaseConfig);

export default app