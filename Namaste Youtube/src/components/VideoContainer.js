import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { YOUTUBE_VIDEOS_API } from "../utils/constants.js";
import VideoCard from "./VideoCard.js";

export default function VideoContainer() {
    const videos = useFetch(YOUTUBE_VIDEOS_API);

    return (
        <div className="flex flex-wrap justify-center h-[30.9rem] overflow-y-auto video-scrollbar">
            {videos.map((video) => (
                <Link key={video?.id} to={'/watch?v=' + video.id}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};
