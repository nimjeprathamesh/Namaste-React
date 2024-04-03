import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Comment({data}) {
    const {name, text} = data;

    return (
        <div className="flex mt-2 shadow-sm bg-gray-100 px-3 py-2 my-2 rounded-lg">
            <FontAwesomeIcon icon={faCircleUser} size="2x" className="my-2 text-gray-500" />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};