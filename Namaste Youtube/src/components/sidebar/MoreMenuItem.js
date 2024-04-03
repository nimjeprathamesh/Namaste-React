import React from "react";
import { YOUTUBE_ICON, YOUTUBE_KIDS_ICON, YOUTUBE_MUSIC_ICON } from "../../utils/constants.js";

export default function MoreMenuItem() {
    return (
        <>
            <h1 className="font-bold pt-4 pb-1">More from YouTube</h1>
            <ul>
                <li className="flex ml-2 p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    <img src={YOUTUBE_ICON} alt="logo" className="w-6 h-6 mr-4" />
                    YouTube Premium
                </li>
                <li className="flex ml-2 p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    {YOUTUBE_MUSIC_ICON} <span className="ml-4">YouTube Music</span>
                </li>
                <li className="flex ml-2 p-1 py-2 rounded-xl text-sm cursor-pointer hover:bg-gray-200">
                    {YOUTUBE_KIDS_ICON} <span className="ml-4">YouTube Kids</span>
                </li>
            </ul>
        </>
    );
};