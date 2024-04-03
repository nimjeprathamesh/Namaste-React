import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function getVideos() {
            const data = await fetch(url);
            const json = await data.json();
            setVideos(json?.items);
        }

        getVideos();
    }, [url]);

    return videos;
}