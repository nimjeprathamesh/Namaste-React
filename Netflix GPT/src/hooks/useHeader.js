import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleGPTSearchView } from "../slice/gptSlice.js";
import { addUser, removeUser } from '../slice/userSlice.js';
import { auth } from '../utils/firebase.js';

export default function useHeader() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);

    function handleSignOut() {
        signOut(auth).then(() => {})
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayname: displayName,
                        photoURL: photoURL,
                    })
                );
                setUser(user);
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [dispatch, navigate]);

    function handleGPTSearchClick() {
        dispatch(toggleGPTSearchView());
    }

    return {
        user, handleSignOut, handleGPTSearchClick
    };
}