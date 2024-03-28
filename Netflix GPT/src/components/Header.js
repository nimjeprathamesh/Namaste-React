import React from 'react';
import useHeader from "../hooks/useHeader.js";
import { Logo } from '../utils/constants.js';

export default function Header() {
    const {user, handleSignOut, handleGPTSearchClick} = useHeader();

    return (
        <div className='px-8 py-2 bg-gradient-to-b from-black flex justify-between absolute w-full z-10'>
            <img className='w-44' src={Logo} alt='logo' />
            {user && (
                <div className='flex w-30 p-2 z-10'>
                    <button
                        className=
                            "py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg cursor-pointer hover:bg-opacity-70"
                        onClick={handleGPTSearchClick}
                    >
                        GPT Search
                    </button>
                    <img src={user.photoURL} alt='userIcon' className='rounded-full m-4 mr-2 w-8 shadow-xl' />
                    <button className='font-bold text-white hover:text-red-600' onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
}