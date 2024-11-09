import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  initializeApp,
  firebaseConfig,
  GoogleAuthProvider,
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
} from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export const register = async (
  email: string,
  password: string,
  fullName: string
) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      fullName,
      email,
    });
    console.log("Document written with ID: ", docRef.id);
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    console.error("Error adding document: ", e);
    console.log(e);
  }
};

export const  signUpWithGoogle = async () => {
  const provider = await new GoogleAuthProvider();
};

export const login = async (email: string, password: string) => {
  const docRef = doc(db, "users");
  const docSnap = await getDoc(docRef);

  try {
    if (docSnap.exists()) {
       console.log("Document data:", docSnap.data());
        const data = await docSnap.data();
      console.log(data);
    } else {
      console.log("No such document!");
    }
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login successful!");
  } catch (error: any) {
    alert(error.message);
    // console.log(error.message);
  }
};
