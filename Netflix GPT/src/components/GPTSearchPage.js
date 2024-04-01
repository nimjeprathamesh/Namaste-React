import React from 'react';
import { BgImage } from '../utils/constants';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import GPTSearchBar from './GPTSearchBar';

export default function GPTSearchPage() {
    return (
        <div className='bg-cover'>
            <div className='absolute -z-10'>
                <img src={BgImage} alt='bgImage' />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestion />
        </div>
    );
}