import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { app } from "./firebaseConfig";

export const googleProvider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const db = getFirestore(app);

export const register = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    alert(e.message);
    console.log(e);
  }
};

export const signUpWithGoogle = async () => {
  const provider = await new GoogleAuthProvider();
};

export const login = async (email: string, password: string, router: any) => {
try{

  await signInWithEmailAndPassword(auth, email, password);
  alert("Login successful!");
  router.push("/");
}catch (e: any) {
  alert(e.message);
  console.log(e);
}
};

export { app };
