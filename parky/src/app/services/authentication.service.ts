import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIeokwp0IGLSh2c5KXZwMEnmca3Q3-V0U",
  authDomain: "parky-d6de6.firebaseapp.com",
  projectId: "parky-d6de6",
  storageBucket: "parky-d6de6.appspot.com",
  messagingSenderId: "776592776393",
  appId: "1:776592776393:web:154b2178447f1614634118",
  measurementId: "G-FQ3M3GL61M"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  async logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  async logOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
}