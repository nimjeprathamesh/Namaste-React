import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_Options } from "../utils/constants.js";

export default function useFetch(url, actionCreator) {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(url, API_Options);
            const json = await data?.json();
            dispatch(actionCreator(json?.results));
        }

        fetchData();
    }, [dispatch, url, actionCreator]);
};
