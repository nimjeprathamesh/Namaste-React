import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCardDetails from '../../hook/useCardDetails.js';
import MenuShimmer from '../shimmer/MenuShimmer.js';
import RestaurantCategory from './RestaurantCategory.js';

export default function RestaurantCardDetails() {
    const [showIndex, setShowIndex] = useState(null);
    const {id} = useParams();
    const resInfo = useCardDetails(id);
    const card = resInfo?.cards[0]?.card?.card?.info;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => (
        c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ));

    const handleCategoryClick = (index) => {
        setShowIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className='w-4/6 mx-60 my-5'>
            <div className='flex justify-between my-4'>
                <h1 className='font-bold text-2xl'>{card?.name}</h1>
                <p className='text-green-500 font-bold border border-solid border-gray-400 p-2 '>
                    ⭐ {card?.avgRating || card?.avgRatingString}
                </p>
            </div>
            <p>{card?.cuisines.join(", ")} - {card?.costForTwoMessage}</p>
            <p>{card?.areaName}, {card?.sla?.lastMileTravelString}</p>
            <p className='mb-8'>{card?.labels[1]?.message}</p>
            {categories ? (
                categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => handleCategoryClick(index)}
                    currentIndex={index}
                />
            ))
            ) : (
                <MenuShimmer />
            )}
        </div>
    );
}