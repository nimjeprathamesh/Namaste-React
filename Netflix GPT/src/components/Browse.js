import React from 'react';
import { useSelector } from 'react-redux';
import useMoviesData from '../hooks/useMoviesData.js';
import GPTSearchPage from './GPTSearchPage.js';
import Header from './Header.js';
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';

export default function Browse() {
    const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
    useMoviesData();

    return (
        <div>
            <Header />
            {showGPTSearch ? <GPTSearchPage /> : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    );
}