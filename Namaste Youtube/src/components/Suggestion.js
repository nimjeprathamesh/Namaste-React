import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Suggestion({suggestions}) {
    return (
        <div
            className=
                "absolute top-12 left-[23rem] py-5 bg-white text-left w-[34.5rem] rounded-xl shadow-sm shadow-black"
        >
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} className="py-2 px-5 cursor-pointer hover:bg-gray-200">
                        <FontAwesomeIcon icon={faSearch} className="mr-2" />{suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};