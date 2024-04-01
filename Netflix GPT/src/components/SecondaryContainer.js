import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList.js';

export default function SecondaryContainer() {
    const movies = useSelector(store => store.movies);

    return (
        movies && (
            <div className='bg-black'>
                <div className='-mt-64 ml-4 pb-8 relative z-10'>
                    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                    <MovieList title={"Popular on Netflix"} movies={movies?.popularMovies} />
                    <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
                    <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
                    <MovieList title={"Only on Netflix"} movies={movies?.horrorMovies} />
                    <MovieList title={"International TV Shows"} movies={movies?.internationalTVShows} />
                    <MovieList title={"All Trending"} movies={movies?.allTrending} />
                    <MovieList title={"Trending Movies"} movies={movies?.trendingMovies} />
                    <MovieList title={"Trending TV Shows"} movies={movies?.addTrendingTVShows} />
                    <MovieList title={"Airing Today TV Series"} movies={movies?.airingTodayTVSeries} />
                    <MovieList title={"On The Air TV Series"} movies={movies?.onTheAirTVSeries} />
                    <MovieList title={"Popular TV Series"} movies={movies?.popularTVSeries} />
                    <MovieList title={"Top Rated TV Series"} movies={movies?.topRatedTVSeries} />
                </div>
            </div>
        )
    );
}