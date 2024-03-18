import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ItemCategory from "../ItemCategory.js";

export default function RestaurantCategory({data, showItems, setShowIndex, currentIndex}) {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleClick() {
        setShowIndex(currentIndex);
        setIsExpanded(prevState => !prevState);
    }

    return (
        <div className="mt-4">
            <div className="w-full mx-auto bg-gray-50 shadow-xl shadow-gray-400 px-5 py-2">
                <div className={`flex justify-between ${data?.itemCards && 'cursor-pointer'}`} onClick={handleClick}>
                    <span className="font-bold text-lg p-1">
                        {data?.title} {data?.itemCards && '('}{data?.itemCards?.length}{data?.itemCards && ')'}
                    </span>
                    <span className='relative top-2'>
                        {data?.itemCards && (
                            <FontAwesomeIcon icon={isExpanded ? faAngleUp : faAngleDown} />
                        )}
                    </span>
                </div>
                <ItemCategory items={data} toggleItem={showItems} />
            </div>
        </div>
    );
}