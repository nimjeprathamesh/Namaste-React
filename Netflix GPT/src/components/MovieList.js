import React from 'react';
import MovieCard from './MovieCard.js';

export default function MovieList({title, movies}) {
    return (
        <div className='p-6 pb-0'>
            <h1 className='py-1 font-bold text-xl text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hidden'>
                <div className='flex'>
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} alt={movie.original_title} />
                    ))}
                </div>
            </div>
        </div>
    );
}