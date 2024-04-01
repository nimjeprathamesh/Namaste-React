import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConst.js';
import Button from './UI/button.js';
import Input from './UI/input.js';

export default function GPTSearchBar() {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    return (
        <div className='pt-[7%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
                <Input
                    ref={searchText}
                    type='text'
                    className='p-4 m-3 rounded-lg col-span-9'
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <Button
                    type='submit'
                    className=
                        'col-span-3 text-xl m-3 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600'
                    children={lang[langKey].search}
                />
            </form>
        </div>
    );
}