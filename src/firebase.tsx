import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";

import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface User {
  name: string,
  user: string,
  password: string
}

export async function saveUser(data: User) {
  const { name, user, password } = data;

  try {
    const docRef = await addDoc(collection(db, "users"), {
      name, user, password
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

interface LoginData {
  user: string,
  password: string,
  loginAction: (name: string) => void
}

export async function tryLogin({ user, password, loginAction }: LoginData) {

  const users = collection(db, "users");
  const q = query(users, where("user", "==", user), where("password", "==", password));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    loginAction("");
    return;
  }

  querySnapshot.forEach((doc) => {
    loginAction(doc.data().name);
  });
} 