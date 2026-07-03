import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
onAuthStateChanged,
signOut
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

onAuthStateChanged(auth,(user)=>{

if(!user){

window.location.href="index.html";

}

});

document.getElementById("logoutBtn").addEventListener("click",()=>{

signOut(auth).then(()=>{

window.location.href="index.html";

});

});
