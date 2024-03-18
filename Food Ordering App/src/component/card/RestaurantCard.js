import { CDN_URL } from '../../utils/constants.js';

export default function RestaurantCard(props) {
    const card = props.resData.info;

    return (
        <div
            className='m-2 p-3 w-[250px] bg-gray-100 shadow-xl border hover:bg-gray-200 rounded-lg'
        >
            <img
                className='rounded-lg shadow-xl'
                src={CDN_URL + card.cloudinaryImageId}
                alt='res-logo'
            />
            <h3 className='font-bold py-4 text-lg'>{card.name}</h3>
            <h4>{card.cuisines.join(", ")}</h4>
            <h4>⭐{card.avgRating || card?.avgRatingString}</h4>
            <h4>{card.costForTwo}</h4>
            <h4>{card.sla.slaString}</h4>
        </div>
    );
}

export function withPromotedLabel(RestaurantCard) {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white mx-5 my-3 p-2 rounded-lg'>
                    Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
}