import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from 'react-redux';
import { toggleMenu } from "../../slice/appSlice.js";
import { LOGO } from "../../utils/constants.js";
import Button from "../UI/Button.js";

export default function MenuHeader() {
    const dispatch = useDispatch();

    function handleToggleMenu() {
        dispatch(toggleMenu());
    }

    return (
        <div className='flex col-span-1'>
            <Button
                className='px-[0.7rem] mx-2 ml-4 text-xl rounded-full hover:bg-gray-200'
                onClick={handleToggleMenu}
            >
                <FontAwesomeIcon icon={faBars} className='font-normal' />
            </Button>
            <img className='h-14 -m-2 w-28 ml-2' src={LOGO} alt='logo' />
        </div>
    );
};