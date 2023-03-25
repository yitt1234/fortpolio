import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANIhLQmpXSwaAh6HlIezH1sTN9uYC96zQ",
    authDomain: "ilyjx-bf924.firebaseapp.com",
    projectId: "ilyjx-bf924",
    storageBucket: "ilyjx-bf924.appspot.com",
    messagingSenderId: "552935291269",
    appId: "1:552935291269:web:864df06aaa8bd195856cec",
    measurementId: "G-0ED7YBQEYL"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const q = document.querySelector("#email")
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

const auth = getAuth();




document.getElementById('signUpButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signUpEmail = document.getElementById('signUpEmail').value
    const signUpPassword = document.getElementById('signUpPassword').value

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            console.log(userCredential)
            // Signed in
            


            // ...
        })
        .catch((error) => {
            console.log('error')

            // ..
            console.log(error.message)
            alert(error.message)
            
        });

})
//TODO write user information and name into the textcloud page
document.getElementById('signInButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signInEmail = document.getElementById('signInEmail').value
    const signInPassword = document.getElementById('signInPassword').value

    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
            // Signed in
            console.log(userCredential)
            localStorage.setItem("iuli", signInEmail)
            window.location.reload()
            // ...
        })
        .catch((error) => {
            console.log('로그인 실패')

            alert("failed to login " + error.message)
        });

})
document.getElementById('2').addEventListener('click', (event) => {
    event.preventDefault()
    $('#1').hide()
    $('#3').show()
})

document.getElementById('4').addEventListener('click', (event) => {
    event.preventDefault()
    $('#3').hide()
    $('#1').show()
})
$(document).ready(function () {
    $('#1').hide()
});

document.getElementById('logout').addEventListener('click', (event) => {
 localStorage.removeItem("iuli")
 window.location.reload()

})