import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBFX5AQslX7ndBHBTZljfKYfQxTiTtscZc",
    authDomain: "crypto-dashboard-project.firebaseapp.com",
    projectId: "crypto-dashboard-project",
    storageBucket: "crypto-dashboard-project.appspot.com",
    messagingSenderId: "219459904289",
    appId: "1:219459904289:web:0553a1eb35c25b9a105460"
  };

export const app = initializeApp(firebaseConfig);
