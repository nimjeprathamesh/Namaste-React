import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { auth } from '../utils/firebase.js';
import { addUser, removeUser } from '../utils/userSlice.js';
import Browse from './Browse.js';
import Login from './Login.js';

export default function Body() {
    const dispatch = useDispatch();

    const router = createBrowserRouter([
        {path: '/', element: <Login />},
        {path: '/browser', element: <Browse />},
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayname, photoURL} = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayname: displayname,
                        photoURL: photoURL,
                    })
                );
            } else {
                dispatch(removeUser());
            }
        });
    }, [dispatch]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
