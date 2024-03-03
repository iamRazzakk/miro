// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt2nJxNYYQOrw4SNI7GsbEUqvDaHvHss8",
  authDomain: "miro-a4a17.firebaseapp.com",
  projectId: "miro-a4a17",
  storageBucket: "miro-a4a17.appspot.com",
  messagingSenderId: "288512579222",
  appId: "1:288512579222:web:a7c27113f1314366e714b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
