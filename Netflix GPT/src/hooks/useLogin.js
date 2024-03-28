import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../slice/userSlice.js';
import { User_Avatar } from "../utils/constants.js";
import { auth } from '../utils/firebase.js';
import CheckValidData from '../utils/validation.js';

export default function useLogin() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState({
        email: [],
        password: [],
        general: ''
    });
    const [togglePassword, setTogglePassword] = useState(false);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    function toggleSignInForm() {
        setIsSignIn(!isSignIn);
    }

    function handleToggleIcon() {
        setTogglePassword(!togglePassword);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const message = CheckValidData({
            email: email.current.value,
            password: password.current.value,
        });
        setErrorMessage(message);
    
        if (Object.values(message).every(array => array.length === 0)) {
            if (!isSignIn) {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: User_Avatar,
                    }).then(() => {
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayname: displayName,
                            photoURL: photoURL,
                        }));
                    }).catch((error) => {
                        setErrorMessage({ ...errorMessage, general: error.message });
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    let errorText = error.message;
                    if (errorCode === 'auth/email-already-in-use') {
                        errorText = 'Email already in use.';
                    }
                    setErrorMessage({ email: [errorText], password: [], general: '' });
                });
            } else {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    dispatch(addUser({
                        uid: user.uid,
                        email: user.email,
                        displayname: user.displayName,
                        photoURL: user.photoURL,
                    }));
                })
                .catch((error) => {
                    const errorCode = error.code;
                    let errorText = error.message;
                    if (errorCode === 'auth/invalid-credential') {
                        errorText = 'Invalid credentials';
                        setErrorMessage({ ...errorMessage, general: errorText });
                    }
                });
            }
        }
    }

    return {
        name,
        email,
        password,
        isSignIn,
        errorMessage,
        togglePassword,
        toggleSignInForm,
        handleToggleIcon,
        handleSubmit
    };
}