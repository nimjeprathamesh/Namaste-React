import { useDispatch } from 'react-redux';
import { removeItem } from "../store/cartSlice.js";
import { CDN_URL } from "../utils/constants.js";

export default function CartItemList({items}) {
    const dispatch = useDispatch();

    function handleRemoveItem(item) {
        dispatch(removeItem(item));
    }

    return (
        <ul>
            {items && items?.map((item) => {
                const listItem = item.card.info;
                return (
                    <li className='mx-2 my-4 list-none shadow-lg shadow-gray-400' key={listItem.id}>
                        <div className='flex justify-between px-4 py-4'>
                            <div className="w-10/12">
                                <h3 className='font-bold m-2'>{listItem.name}</h3>
                                <p className='m-2'>
                                    {"Rs."}{listItem.price/100 || listItem.defaultPrice/100}
                                </p>
                                <p className='m-2 mr-4 text-sm'>{listItem.description}</p>
                            </div>
                            <div className="w-2/12">
                                {listItem.imageId && (
                                    <img
                                        className='shadow-xl shadow-gray-400 rounded-xl'
                                        src={CDN_URL + listItem.imageId}
                                        alt={listItem.name}
                                    />
                                )}
                                <div className={`relative ${listItem.imageId ? 'bottom-6' : 'top-6'}`}>
                                    <button
                                        className='font-bold py-2 px-4 mx-5 bg-white rounded-lg text-green-500 border border-gray-400 hover:shadow-xl shadow-gray-950'
                                        onClick={() => handleRemoveItem(item)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}