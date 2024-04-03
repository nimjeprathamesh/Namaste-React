import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import useFetch from "../hooks/useFetch.js";
import { closeMenu } from "../slice/appSlice.js";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants.js";
import LiveChat from "./chat/LiveChat.js";
import CommentsContainer from "./comments/CommentsContainer.js";

export default function WatchPage() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('v');
    const videos = useFetch(YOUTUBE_VIDEO_DETAILS_API + id + "&key=" + GOOGLE_API_KEY);

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

    return (
        <div className="col-span-12 p-5 h-[34rem] overflow-y-auto watch-scrollbar">
            <div className="flex">
                <div>
                    <iframe
                        width="740"
                        height="440"
                        className="rounded-2xl"
                        src={"https://www.youtube.com/embed/" + id}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full">
                    <LiveChat />
                </div>
            </div>
            {videos.map((video) => (
                <div key={video.id}>
                    <h1 key={video.id} className="font-bold text-xl p-2 w-[44rem]">
                        {video?.snippet?.title}
                    </h1>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircleUser} size="2x" className="text-gray-500" />
                        <span className="relative px-2 bottom-1 text-md">{video?.snippet?.channelTitle}</span>
                    </div>
                </div>
            ))}
            <CommentsContainer />
        </div>
    );
};