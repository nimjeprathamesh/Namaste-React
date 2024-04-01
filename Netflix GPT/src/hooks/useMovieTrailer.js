import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../slice/moviesSlice.js';
import { API_Options } from '../utils/constants.js';

export default function useMovieTrailer(movieId) {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getMovieVideos() {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/" + movieId +"/videos?language=en-US",
                API_Options,
            );
            const json = await data.json();
            const filterData = json?.results?.filter((video) => video?.type === "Trailer");
            const trailer = filterData?.length ? filterData[1] : json?.results[0];
            dispatch(addTrailerVideo(trailer));
        }

        getMovieVideos();
    }, [dispatch, movieId]);
}