import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../store/UserContext.js';
import { LOGO_URL } from '../utils/constants.js';
import useOnlineStatus from './hook/useOnlineStatus.js';
import LogoShimmer from './shimmer/LogoShimmer.js';


export default function Header() {
    const [btnName, setBtnName] = useState('Login');
    const [logoLoaded, setLogoLoaded] = useState(false);
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    function handleClick() {
        btnName === "Login" ? setBtnName('Logout') : setBtnName('Login');
    }

    function handleLogoLoad() {
        setLogoLoaded(true);
    }

    return (
        <div className="flex justify-between shadow-md shadow-gray-400">
            <div>
                {!logoLoaded && <LogoShimmer />}
                <img
                    className={`w-36 ${logoLoaded ? 'visible' : 'hidden'}`}
                    src={LOGO_URL}
                    alt='res-logo'
                    onLoad={handleLogoLoad}
                />
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>
                        <p>Online Status: {onlineStatus ? "✅" : "🔴"}</p>
                    </li>
                    <li className='px-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/cart'>Cart</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li>
                        <button
                            className='bg-slate-300 px-4 py-1 m-0 hover:bg-slate-400 rounded-lg'
                            onClick={handleClick}
                        >
                            {btnName}
                        </button>
                    </li>
                    <li className='px-4 pr-0 font-bold'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}