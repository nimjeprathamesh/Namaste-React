import { useState } from 'react';
import { LOGO_URL } from '../utils/constants.js';
import classes from './Header.module.css';

export default function Header() {
    const [btnName, setBtnName] = useState('Login');

    function handleClick() {
        btnName === "Login" ? setBtnName('Logout') : setBtnName('Login');
    }

    return (
        <div className={classes.header}>
            <div>
                <img className={classes.logo} src={LOGO_URL} alt='res-logo' />
            </div>
            <div className={classes['nav-items']}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>
                        <button className={classes.login} onClick={handleClick}>
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}