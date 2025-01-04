// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXnV1cINkDaBPB_8wqnkGL8A3zY4SRDqw",
  authDomain: "e-shop-ca9c6.firebaseapp.com",
  projectId: "e-shop-ca9c6",
  storageBucket: "e-shop-ca9c6.firebasestorage.app",
  messagingSenderId: "326654460594",
  appId: "1:326654460594:web:4a693b5395924873303fab",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
