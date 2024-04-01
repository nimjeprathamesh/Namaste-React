import React from 'react';
import useHeader from "../hooks/useHeader.js";
import { Logo, Supported_Languages } from '../utils/constants.js';
import Button from './UI/button.js';

export default function Header() {
    const {user, showGPTSearch, handleSignOut, handleGPTSearchClick, handleLanguageChange} = useHeader();

    return (
        <div className='px-8 py-2 bg-gradient-to-b from-black flex justify-between absolute w-full z-10'>
            <img className='w-44' src={Logo} alt='logo' />
            {user && (
                <div className='flex w-30 p-2 z-10'>
                    {showGPTSearch && (
                        <select
                            className=
                                'py-2 px-4 mx-4 my-2 bg-gray-600 text-white rounded-lg cursor-pointer'
                            onChange={handleLanguageChange}
                        >
                            {Supported_Languages.map((lang) => (
                                <option key={lang.identifier} value={lang.identifier}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}
                    <Button
                        className=
                            "py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg cursor-pointer hover:bg-opacity-80"
                            children={showGPTSearch ? "Home Page" : "GPT Search"}
                        onClick={handleGPTSearchClick}
                    />
                    <img src={user?.photoURL} alt='userIcon' className='rounded-full m-4 mr-2 w-8 shadow-xl' />
                    <Button
                        className='font-bold text-white hover:text-red-600'
                        children="Sign Out"
                        onClick={handleSignOut}
                    />
                </div>
            )}
        </div>
    );
}