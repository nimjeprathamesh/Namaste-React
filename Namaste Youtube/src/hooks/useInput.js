import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from "../slice/searchSlice.js";
import { YOUTUBE_SEARCH_API } from "../utils/constants.js";

export default function useInput() {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector(store => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getSearchSuggestions() {
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await data.json();
            setSuggestions(json[1]);
            dispatch(cacheResults({
                [searchQuery] : json[1],
            }));
        }

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions()
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery, searchCache, dispatch]);

    function handleInputChange(event) {
        setSearchQuery(event.target.value)
    }

    function handleFocus() {
        setShowSuggestions(true);
    }

    function handleBlur() {
        setShowSuggestions(false);
    }

    return {searchQuery, suggestions, showSuggestions, handleInputChange, handleFocus, handleBlur};
};