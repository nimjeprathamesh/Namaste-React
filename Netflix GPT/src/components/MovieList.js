import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import MovieCard from './MovieCard.js';
import Button from './UI/button.js';

export default function MovieList({title, movies}) {
    const containerRef = useRef(null);

    function handlePreviousClick() {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 100;
        }
    }

    function handleNextClick() {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 100;
        }
    }

    return (
        <div className='px-6 py-12 pb-0'>
            <div className='flex justify-between'>
                <h1 className='py-1 font-bold text-xl text-white'>{title}</h1>
                <div className='flex justify-between'>
                    <Button className='text-white mx-4 hover:text-opacity-70' onClick={handlePreviousClick}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} size='2x' />
                    </Button>
                    <Button className='text-white hover:text-opacity-70' onClick={handleNextClick}>
                        <FontAwesomeIcon icon={faCircleArrowRight} size='2x' />
                    </Button>
                </div>
            </div>
            <div
                className='flex overflow-x-scroll scrollbar-hidden'
                ref={containerRef}
                style={{ scrollBehavior: 'smooth' }}
            >
                <div className='flex'>
                    {movies?.map((movie) => (
                        <MovieCard
                            key={movie?.id}
                            posterPath={movie?.poster_path}
                            backdropPath={movie?.backdrop_path}
                            alt={movie?.original_title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}