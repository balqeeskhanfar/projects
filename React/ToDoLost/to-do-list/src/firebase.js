// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyd2kkq00Ah1dQgM49r2K6UQaZ0zoJMwM",
    authDomain: "to-do-list-21285.firebaseapp.com",
    projectId: "to-do-list-21285",
    storageBucket: "to-do-list-21285.appspot.com",
    messagingSenderId: "1034764304909",
    appId: "1:1034764304909:web:29fd1f1ec2aaa12962cb44",
    measurementId: "G-BJBNZYG842",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async (setErrorMsg) => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        var ret = err.message.replace("Firebase: Error (auth/", "");
        ret = ret.replace(").", "");
        setErrorMsg(ret);
    }
};

const logInWithEmailAndPassword = async (email, password, setErrorMsg) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        var ret = err.message.replace("Firebase: Error (auth/", "");
        ret = ret.replace(").", "");
        setErrorMsg(ret);
    }
};

const registerWithEmailAndPassword = async (
    name,
    email,
    password,
    setErrorMsg
) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        var ret = err.message.replace("Firebase: Error (auth/", "");
        ret = ret.replace(").", "");
        setErrorMsg(ret);
    }
};

const logout = () => {
    signOut(auth);
};
export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
};
