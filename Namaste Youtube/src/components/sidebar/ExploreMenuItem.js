import { faBagShopping, faClapperboard, faFire, faGamepad, faLightbulb, faMusic, faNewspaper, faPodcast, faTrophy, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LIVE_ICON } from "../../utils/constants";

export default function ExploreMenuItem() {
    return (
        <>
            <h1 className="font-bold pt-4 pb-1">Explore</h1>
            <ul>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faFire} className="mx-2" />Trending
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faBagShopping} className="mx-2" />Shopping
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faMusic} className="mx-2" />Music
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faClapperboard} className="mx-2" />Movies
                </li>
                <li className="flex ml-1 p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    {LIVE_ICON} <span className="ml-1">Live</span>
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faGamepad} className="mx-2" />Gaming
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faNewspaper} className="mx-2" />News
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faTrophy} className="mx-2" />Sports
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faLightbulb} className="mx-2" />Courses
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faVideoCamera} className="mx-2" />Fashion & Beauty
                </li>
                <li className="p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <FontAwesomeIcon icon={faPodcast} className="mx-2" />Podcasts
                </li>
            </ul>
            <hr className="mt-2" />
        </>
    );
};