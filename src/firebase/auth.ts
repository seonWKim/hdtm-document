import {auth} from '@site/src/firebase/config';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        return await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Error during sign-in: ", error);
    }
};

export {signInWithGoogle};
