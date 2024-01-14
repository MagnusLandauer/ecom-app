// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { SignUpFormPayload } from "types/entities";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRyAT6tWAym_fXB4lC6eti2GDFPbh_vDY",
  authDomain: "ecom-project-db-4dfdb.firebaseapp.com",
  projectId: "ecom-project-db-4dfdb",
  storageBucket: "ecom-project-db-4dfdb.appspot.com",
  messagingSenderId: "367788680091",
  appId: "1:367788680091:web:5fb4ed407325a246fc773e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(app);

export const createUserDocFromAuth = async (userAuth: any, additionalInfo: any = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userDocSnapshot = await getDoc(userDocRef);

  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error:any) {
      console.log('Error creating user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (userAuth:SignUpFormPayload) => {
  const { email, password } = userAuth;
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
}

export const signUserInWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
}
