import {auth, GoogleAuthProvider, signInWithPopup} from './config/firebaseConfig';

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("User Info: ", user);
    } catch (error) {
        console.error("Error during sign-in: ", error);
    }
};

export {signInWithGoogle};
