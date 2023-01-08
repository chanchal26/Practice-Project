import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAREC0KhTGxXiHxnlBALrXJCLgS31ntx34",
    authDomain: "practice-project-ef006.firebaseapp.com",
    projectId: "practice-project-ef006",
    storageBucket: "practice-project-ef006.appspot.com",
    messagingSenderId: "301518260986",
    appId: "1:301518260986:web:c745167e2a66f62aa41743"
};

const app = initializeApp(firebaseConfig);

export default app;