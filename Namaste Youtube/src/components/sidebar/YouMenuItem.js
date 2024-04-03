import { faClockFour, faClockRotateLeft, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function YouMenuItem() {
    return (
        <>
            <h1 className="font-bold py-2">You</h1>
            <ul>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="mx-2" />History
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faClockFour} className="mx-2" />Watch Later
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faThumbsUp} className="mx-2" />Liked Videos
                </li>
            </ul>
            <hr className="mt-2" />
        </>
    );
};