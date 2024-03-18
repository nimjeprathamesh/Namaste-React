import { CDN_URL } from "../utils/constants.js";

export default function CategoryItemList({list}) {
    const items = list?.itemCards;

    return (
        <ul>
            {list && items.map((item) => {
                const info = item?.card?.info;
                return (
                    <li className='mx-4 my-4 list-none shadow-lg shadow-gray-400' key={info.id}>
                        <div className='flex justify-between px-4 py-4'>
                            <div className="w-10/12">
                                <h3 className='font-bold m-2'>{info.name}</h3>
                                <p className='m-2'>
                                    {"Rs."}{info.price/100 || info.defaultPrice/100}
                                </p>
                                <p className='m-2 text-sm'>
                                    {info.description && info.description}
                                </p>
                            </div>
                            <div className="w-2/12">
                                {info.imageId && (
                                    <img
                                        className='shadow-xl shadow-gray-400 rounded-xl'
                                        src={CDN_URL + info.imageId}
                                        alt={info.name}
                                    />
                                )}
                                <div className={`relative ${info.imageId ? 'bottom-6' : 'top-6'}`}>
                                    <button
                                        className={`
                                            font-bold py-2 px-8 mx-5 bg-white rounded-lg text-green-500 hover:shadow-xl border border-gray-400
                                        `}
                                    >
                                        Add
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