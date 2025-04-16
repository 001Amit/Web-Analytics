import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFiBDaoSP1S_1LBVo3AYaCFD4jUPNNZvM",
  authDomain: "portfolio-d29ab.firebaseapp.com",
  projectId: "portfolio-d29ab",
  storageBucket: "portfolio-d29ab.firebasestorage.app",
  messagingSenderId: "17300947224",
  appId: "1:17300947224:web:44256af9d699b751549e6d",
  measurementId: "G-W8T8DV2YFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
