import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CategoryItemList from './CategoryItemList.js';
import ItemList from "./ItemList.js";

export default function ItemCategory({items, toggleItem}) {
    const [expandedCategories, setExpandedCategories] = useState([]);
    const itemCategories = items?.categories;

    function handleClick(index) {
        if (expandedCategories === index) {
            setExpandedCategories(null);
        } else {
            setExpandedCategories(index);
        }
    }

    function isCategoryExpanded(index) {
        return expandedCategories === index;
    }

    return (
        <ul>
            {itemCategories && itemCategories.map((category, index) => (
                <ul key={category?.title} className="my-1 mx-5">
                    <div className="w-full bg-gray-50 border-b border-gray-300 p-2">
                        <div className={`flex justify-between cursor-pointer`} onClick={() => handleClick(index)}>
                            <span className="p-1">
                                {category?.title} {category.itemCards && '('}
                                {category?.itemCards?.length}{category.itemCards && ')'}
                            </span>
                            <span className='relative top-2'>
                                {category.itemCards && (
                                    <FontAwesomeIcon icon={isCategoryExpanded(index) ? faAngleUp : faAngleDown} />
                                )}
                            </span>
                        </div>
                    </div>
                    {isCategoryExpanded(index) && <CategoryItemList list={category}/>}
                </ul>
            ))}
            {toggleItem && <ItemList items={items} />}
        </ul>
    );
}