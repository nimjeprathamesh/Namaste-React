import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../store/UserContext.js';
import Error from './UI/Error.js';
import RestaurantCard, { withPromotedLabel } from "./card/RestaurantCard.js";
import useCard from './hook/useCard.js';
import useOnlineStatus from './hook/useOnlineStatus.js';
import HomeShimmer from './shimmer/HomeShimmer.js';

export default function Home() {
    const {resLists, search, filteredResList, handleChange, handleSearchClick, handleTopClick} = useCard();
    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const {loggedInUser, setUserName} = useContext(UserContext);

    if(onlineStatus === false) {
        return <Error />;
    }

    return resLists.length === 0 ? <HomeShimmer /> : (
        <div>
            <div className='flex m-4 ml-0 mb-2'>
                <div className='p-4'>
                    <input
                        className='border border-gray-400 mx-2 py-1 px-2 rounded-lg'
                        type='search'
                        placeholder='Search the restaurant'
                        value={search}
                        onChange={handleChange}
                    />
                    <button
                        className='px-4 py-1 bg-green-300 rounded-lg hover:bg-green-400'
                        onClick={handleSearchClick}
                    >
                        Search
                    </button>
                </div>
                <div className='p-4 flex items-center'>
                    <button
                        className='px-4 py-1 bg-gray-300 rounded-lg hover:bg-gray-400'
                        onClick={handleTopClick}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className='mx-4 ml-0 p-4 flex items-center'>
                    <label>User Name:-</label>
                    <input
                        type='text'
                        placeholder='Enter username'
                        className='border border-gray-400 mx-2 py-1 px-2 rounded-lg'
                        onChange={(e) => setUserName(e.target.value)}
                        value={loggedInUser}
                    />
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                {filteredResList.map((data, index) => (
                    <Link key={index} to={"/card-details/" + data?.card?.card?.info?.id}>
                        {data.card.card.info.promoted ? (
                            <RestaurantCardPromoted resData={data?.card?.card} />
                        ) : (
                            <RestaurantCard resData={data?.card?.card} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}