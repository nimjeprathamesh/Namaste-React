import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../utils/constants.js';
import { auth } from '../utils/firebase.js';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    function handleSignOut() {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            console.log(error);
        });
    }

    const isAuthPage = location.pathname === '/browser';

    return (
        <div className='px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
            <img className='w-44' src={Logo} alt='logo' />
            {isAuthPage && user && (
                <div className='flex w-30 p-2'>
                    <img src={user.photoURL} alt='userIcon' className='rounded-full m-4 mr-2 w-8 shadow-xl' />
                    <button className='font-bold text-white hover:text-red-600' onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
}
