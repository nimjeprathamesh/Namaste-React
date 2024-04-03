import React from "react";

export default function VideoCard({ info }) {
    if (!info) {
        return <div>No video information available.</div>;
    }

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className="p-2 m-2 w-[22rem] shadow-xl cursor-pointer">
            <img className="rounded-xl w-full" src={thumbnails?.medium?.url} alt="thumbnail" />
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics?.viewCount} views</li>
            </ul>
        </div>
    );
}
