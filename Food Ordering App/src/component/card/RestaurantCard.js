import { CDN_URL } from '../../utils/constants.js';
import classes from './RestaurantCard.module.css';

export default function RestaurantCard(props) {
    const card = props.resData.info;

    return (
        <div className={classes['res-card']}>
            <img
                className={classes['res-logo']}
                src={CDN_URL + card.cloudinaryImageId}
                alt='res-logo'
            />
            <h3>{card.name}</h3>
            <h4>{card.cuisines.join(", ")}</h4>
            <h4>⭐{card.avgRating}</h4>
            <h4>{card.costForTwo}</h4>
            <h4>{card.sla.deliveryTime} minutes</h4>
        </div>
    );
}