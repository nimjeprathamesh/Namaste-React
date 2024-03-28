import React from 'react';
import { Img_CDN_URL } from '../utils/constants.js';

export default function MovieCard({posterPath, alt}) {
    return (
        <div className='w-48 mr-4 my-2 shadow-md shadow-white cursor-pointer'>
            <img
                className='h-72'
                src={Img_CDN_URL + posterPath}
                alt={alt}
            />
        </div>
    );
}