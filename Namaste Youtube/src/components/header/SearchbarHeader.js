import { faMicrophone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useInput from "../../hooks/useInput.js";
import Suggestion from "../Suggestion.js";
import Button from "../UI/Button.js";
import Input from "../UI/Input.js";

export default function SearchbarHeader() {
    const {searchQuery, suggestions, showSuggestions, handleInputChange, handleFocus, handleBlur} = useInput();

    return (
        <div className='flex col-span-10 object-center justify-center'>
            <Input
                type="text"
                placeholder="Search"
                className='border border-gray-400 px-4 pl-10 rounded-l-full w-[35rem]'
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <FontAwesomeIcon icon={faSearch} className='absolute top-[1.2em] left-[23.5rem]' />
            <Button
                className='relative -left-[1px] bg-gray-100 px-6 m-0 rounded-r-full border border-gray-400 hover:bg-gray-200'
            >
                <FontAwesomeIcon icon={faSearch} />
            </Button>
            {searchQuery && showSuggestions && (<Suggestion suggestions={suggestions} />)}
            <Button className='bg-gray-200 px-4 rounded-full mx-2 hover:bg-gray-300'>
                <FontAwesomeIcon icon={faMicrophone} />
            </Button>
        </div>
    );
};