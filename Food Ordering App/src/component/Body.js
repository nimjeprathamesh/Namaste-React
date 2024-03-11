import React, { useEffect, useState } from 'react';
import classes from './Body.module.css';
import RestaurantCard from "./card/RestaurantCard.js";
import Shimmer from './shimmer.js';

export default function Body() {
    const [resLists, setResLists] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredResList, setFilteredResList] = useState([]);

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSearchClick() {
        const filteredRes = resLists.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredResList(filteredRes);
    }

    function handleTopClick() {
        const filteredList = resLists.filter(
            (res) => res.info.avgRating > 4.5
        );
        setFilteredResList(filteredList);
    }

    async function fetchData() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.52179432080843&lng=78.39123208075762&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data.json();
        const card1Data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const card4Data = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const combinedData = [...card1Data, ...card4Data];
        setResLists(combinedData);
        setFilteredResList(combinedData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return resLists.length === 0 ? <Shimmer /> : (
        <div className={classes.body}>
            <div className={classes.filter}>
                <div className={classes.search}>
                    <input type='search' className={classes['search-box']} value={search} onChange={handleChange} />
                    <button onClick={handleSearchClick}>Search</button>
                </div>
                <button className={classes['filter-btn']} onClick={handleTopClick}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className={classes["res-container"]}>
                {filteredResList.map((data, index) => (
                    <RestaurantCard key={index} resData={data} />
                ))}
            </div>
        </div>
    );
}