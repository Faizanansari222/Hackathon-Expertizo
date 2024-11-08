import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  initializeApp,
  firebaseConfig,
} from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const register = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
  } catch (error:any) {
    alert(error.message);
    // console.log(error.message);
  }
};
