import {
    addAiringTodayTVSeries,
    addAllTrending,
    addHorrorMovies,
    addInternationalTVShows,
    addNowPlayingMovies,
    addOnTheAirTVSeries,
    addPopularMovies,
    addPopularTVSeries,
    addTopRatedMovies,
    addTopRatedTVSeries,
    addTrendingMovies,
    addTrendingTVShows,
    addUpcomingMovies
} from '../slice/moviesSlice.js';
import useFetch from './useFetch.js';

export default function useMoviesData() {
    useFetch("https://api.themoviedb.org/3/movie/now_playing?page=1", addNowPlayingMovies);
    useFetch("https://api.themoviedb.org/3/movie/popular?page=1", addPopularMovies);
    useFetch("https://api.themoviedb.org/3/movie/top_rated?page=1", addTopRatedMovies);
    useFetch("https://api.themoviedb.org/3/movie/upcoming?page=1", addUpcomingMovies);
    useFetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        addHorrorMovies
    );
    useFetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
        addInternationalTVShows
    );
    useFetch("https://api.themoviedb.org/3/trending/all/day", addAllTrending);
    useFetch("https://api.themoviedb.org/3/trending/movie/day", addTrendingMovies);
    useFetch("https://api.themoviedb.org/3/trending/tv/day", addTrendingTVShows);
    useFetch("https://api.themoviedb.org/3/tv/airing_today?page=1", addAiringTodayTVSeries);
    useFetch("https://api.themoviedb.org/3/tv/on_the_air?page=1", addOnTheAirTVSeries);
    useFetch("https://api.themoviedb.org/3/tv/popular?page=1", addPopularTVSeries);
    useFetch("https://api.themoviedb.org/3/tv/top_rated?page=1", addTopRatedTVSeries);
};