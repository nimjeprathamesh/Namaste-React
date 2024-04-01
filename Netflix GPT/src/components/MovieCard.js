import React from 'react';
import useMovieCard from '../hooks/useMovieCard.js';
import { Img_CDN_URL } from '../utils/constants.js';

export default function MovieCard({ posterPath, backdropPath, alt }) {
    const {modal, cardStyle, handleClick} = useMovieCard(posterPath, backdropPath, alt);

    return (
        <>
            {modal}
            <div
                className='w-48 ml-2 mr-4 my-2 shadow-md shadow-gray-600 cursor-pointer'
                style={cardStyle}
                onClick={handleClick}
            >
                <img
                    className='h-72'
                    src={Img_CDN_URL + posterPath}
                    alt={alt}
                />
            </div>
        </>
    );
}