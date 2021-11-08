import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCIIGp3D1_1e0wjx4Ig7gTaXtLzrswtUMI",
  authDomain: "blogapp-e9761.firebaseapp.com",
  projectId: "blogapp-e9761",
  storageBucket: "blogapp-e9761.appspot.com",
  messagingSenderId: "740741817535",
  appId: "1:740741817535:web:46beb02c3e704a3960d20a"
};
// Initialize Firebase
let app = initializeApp(firebaseConfig);

let firestore = getFirestore(app);

export default firestore;
