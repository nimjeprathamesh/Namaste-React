import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ChatMessage({name, message}) {
    return (
        <div className="px-4 py-2 flex">
            <FontAwesomeIcon
                icon={faCircleUser}
                size="1x"
                className="text-gray-500"
                style={{ height: '1.5rem', width: '1.5rem' }}
            />
            <div className="ml-2">
                <span className="font-bold">{name}</span>
                <span className="text-sm ml-2">{message}</span>
            </div>
        </div>
    );
};