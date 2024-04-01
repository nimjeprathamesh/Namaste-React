import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLanguage } from "../slice/configSlice.js";
import { toggleGPTSearchView } from "../slice/gptSlice.js";
import { addUser, removeUser } from '../slice/userSlice.js';
import { auth } from '../utils/firebase.js';

export default function useHeader() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);

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

    function handleLanguageChange(event) {
        event.preventDefault();
        dispatch(changeLanguage(event.target.value));
    }

    return {
        user, showGPTSearch, handleSignOut, handleGPTSearchClick, handleLanguageChange
    };
}