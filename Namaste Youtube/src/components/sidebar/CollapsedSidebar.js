import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { SHORTS_ICON, SUBSCRIPTIONS_ICON, YOUTUBE_YOU_ICON } from "../../utils/constants";

export default function CollapsedSidebar() {
    return (
        <div className="shadow-xl shadow-gray-400 h-[34.3rem]">
            <ul>
                <Link to='/'>
                    <li
                        className=
                            "flex flex-col justify-center p-5 px-2 rounded-xl cursor-pointer hover:bg-gray-200"
                    >
                        <FontAwesomeIcon icon={faHome} />
                        <span className="mt-2 text-xs flex justify-center">Home</span>
                    </li>
                </Link>
                <li className="flex flex-col justify-center p-5 px-2 rounded-xl cursor-pointer hover:bg-gray-200">
                    <span className="flex justify-center">{SHORTS_ICON}</span>
                    <span className="mt-2 text-xs flex justify-center">Shorts</span>
                </li>
                <li className="flex flex-col justify-center p-5 px-2 rounded-xl cursor-pointer hover:bg-gray-200">
                    <span className="flex justify-center">{SUBSCRIPTIONS_ICON}</span>
                    <span className="mt-2 text-xs flex justify-center">Subscriptions</span>
                </li>
                <li className="flex flex-col justify-center p-5 px-1 rounded-xl cursor-pointer hover:bg-gray-200">
                    <span className="flex justify-center">{YOUTUBE_YOU_ICON}</span>
                    <span className="mt-2 text-xs flex justify-center">You</span>
                </li>
            </ul>
        </div>
    );
};