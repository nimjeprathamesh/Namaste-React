import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { SHORTS_ICON, SUBSCRIPTIONS_ICON } from "../../utils/constants.js";

export default function MainMenuItem() {
    return (
        <>
            <ul>
                <Link to='/'>
                    <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                        <FontAwesomeIcon icon={faHome} className="mx-2" />Home
                    </li>
                </Link>
                <li className="flex ml-1 p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    {SHORTS_ICON} <span className="ml-1">Shorts</span>
                </li>
                <li className="flex ml-1 p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    {SUBSCRIPTIONS_ICON} <span className="ml-1">Subscriptions</span>
                </li>
            </ul>
            <hr className="mt-2" />
        </>
    );
};