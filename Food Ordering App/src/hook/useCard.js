import { useEffect, useState } from "react";

export default function useCard() {
    const [resLists, setResLists] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredResList, setFilteredResList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9351929&lng=77.62448069999999&str=promoted%20foods&trackingId=null&submitAction=ENTER&queryUniqueId=43b72929-7723-cabd-042b-efb1d10d8db7'
        );
        const json = await data.json();
        setResLists(json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards);
        setFilteredResList(json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards);
    }

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSearchClick() {
        const filteredRes = resLists.filter((res) =>
            res.card.card.info.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredResList(filteredRes);
    }

    function handleTopClick() {
        const filteredList = resLists.filter(
            (res) => res.card.card.info.avgRating > 4.5
        );
        setFilteredResList(filteredList);
    }

    return {resLists, search, filteredResList, handleChange, handleSearchClick, handleTopClick};
}