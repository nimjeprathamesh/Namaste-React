import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../NavItem.js';
import useOnlineStatus from '../hook/useOnlineStatus.js';
import UserContext from '../store/UserContext.js';
import { LOGO_URL } from '../utils/constants.js';
import LogoShimmer from './shimmer/LogoShimmer.js';

export default function Header() {
    const [btnName, setBtnName] = useState('Login');
    const [logoLoaded, setLogoLoaded] = useState(false);
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

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
                <ul className='flex p-4 m-4 mr-0'>
                    <li className='px-4'>
                        <p>Online Status: {onlineStatus ? "✅" : "🔴"}</p>
                    </li>
                    {MenuItem.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.to}
                                className={({isActive}) => (
                                    isActive ?
                                    'text-white font-bold px-3 py-2 bg-pink-500 rounded-md shadow-md shadow-gray-400' :
                                    'px-3 py-3'
                                )}
                            >
                                {item.name === 'Cart' ? `${item.name}(${cartItems.length})` : item.name}
                            </NavLink>
                        </li>
                    ))}
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