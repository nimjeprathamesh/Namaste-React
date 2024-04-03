import { faGamepad, faMedal, faMusic, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SubscriptionsMenuItem() {
    return (
        <>
            <h1 className="font-bold pt-4 pb-1">Subscriptions</h1>
            <ul>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faMusic} className="mx-2" />Music
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faMedal} className="mx-2" />Sports
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faGamepad} className="mx-2" />Gaming
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faVideoCamera} className="mx-2" />Movies
                </li>
            </ul>
            <hr className="mt-2" />
        </>
    );
};