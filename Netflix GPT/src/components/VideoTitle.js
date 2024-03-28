import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function VideoTitle({title, overview}) {
    return (
        <div className="w-[84.3rem] aspect-video pt-52 px-12 absolute bg-gradient-to-r from-black z-0">
            <h1 className="text-6xl text-white font-bold" style={{ textShadow: '10px 4px 4px #FF8C00' }}>
                {title}
            </h1>
            <p className="py-6 w-1/3 text-white">{overview}</p>
            <div>
                <button className="px-6 mr-6 py-2 rounded-md shadow-lg bg-white font-bold hover:bg-opacity-70">
                    <FontAwesomeIcon icon={faPlay} className="text-lg" />
                    &nbsp;Play
                </button>
                <button
                    className="px-6 py-2 bg-gray-600 rounded-md shadow-lg hover:bg-opacity-50 font-bold text-white"
                >
                    <FontAwesomeIcon icon={faInfoCircle} className="text-lg text-white " />
                    &nbsp;More Info
                </button>
            </div>
        </div>
    );
}

//02:37:27