import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOuZD4-i047ASAZujroVda3oGH_depkO8",
  authDomain: "civil-success-c849f.firebaseapp.com",
  projectId: "civil-success-c849f",
  storageBucket: "civil-success-c849f.firebasestorage.app",
  messagingSenderId: "482749325991",
  appId: "1:482749325991:web:830c88e58e4feb2e03f182",
  measurementId: "G-88M6NMZS8L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    message.style.color = "#ffffff";
    message.innerHTML = "Please wait...";

    try {

        await signInWithEmailAndPassword(auth, email, password);

        message.style.color = "lime";
        message.innerHTML = "Login Successful";

        setTimeout(() => {

            window.location.href = "dashboard.html";

        },1000);

    }

    catch(error){

        message.style.color = "red";
        message.innerHTML = error.message;

    }

});
