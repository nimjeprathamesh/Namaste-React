import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useLogin from "../hooks/useLogin.js";
import { BackgroundImage } from '../utils/constants.js';
import Header from "./Header.js";

export default function Login() {
    const {
        name,
        email,
        password,
        isSignIn,
        errorMessage,
        togglePassword,
        toggleSignInForm,
        handleToggleIcon,
        handleSubmit
    } = useLogin();

    return (
        <div className='w-full min-h-screen bg-cover bg-no-repeat text-white' style={BackgroundImage}>
            <Header />
            <form className='ml-[29rem] bg-black bg-opacity-80 w-4/12 px-14 py-6 rounded-md' onSubmit={handleSubmit}>
                <h1 className='font-bold text-4xl m-6 ml-0'>
                    {!isSignIn ? 'Sign Up' : 'Sign In'}
                </h1>
                {!isSignIn && (
                    <input
                        ref={name}
                        type='text'
                        placeholder='Name'
                        className={`
                            p-3 w-full border border-gray-400 rounded-md bg-gray-700 bg-opacity-30
                            ${errorMessage.name ? 'mt-4' : 'my-4'}
                        `}
                        required
                    />
                )}
                <input
                    ref={email}
                    type='text'
                    placeholder='Email'
                    className={`
                        p-3 w-full border border-gray-400 rounded-md bg-gray-700 bg-opacity-30
                        ${errorMessage.email.length ? 'mt-4' : 'my-4'}
                    `}
                    required
                />
                {errorMessage.email && errorMessage.email.map((error, index) => (
                    <p key={index} className='text-red-600 w-full'>{error}</p>
                ))}
                <input
                    ref={password}
                    type={togglePassword ? 'text' : 'password'}
                    placeholder='Password'
                    className={`
                        p-3 w-full border border-gray-400 rounded-md bg-gray-700 bg-opacity-30
                        ${errorMessage.password.length || errorMessage.general ? 'mt-4' : 'my-4'}
                    `}
                    required
                />
                <FontAwesomeIcon
                    icon={togglePassword ? faEye : faEyeSlash}
                    className="absolute mt-8 right-[32.3rem] cursor-pointer"
                    onClick={handleToggleIcon}
                />
                {errorMessage.password && errorMessage.password.map((error, index) => (
                    <p key={index} className='text-red-600 w-full'>{error}</p>
                ))}
                {errorMessage.general && (
                    <p className='text-red-600 w-full'>{errorMessage.general}</p>
                )}
                <button
                    type='submit'
                    className={`
                        p-2 ml-0 bg-red-600 font-bold w-full rounded-md hover:bg-red-800
                        ${errorMessage.password.length || errorMessage.general ? 'mt-4' : 'm-2'}
                    `}
                >
                    {!isSignIn ? 'Sign Up' : 'Sign In'}
                </button>
                <p className='my-4 cursor-pointer text-shadow hover:text-gray-400' onClick={toggleSignInForm}>
                    {isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
                </p>
            </form>
        </div>
    );
}