import React from "react";
import Button from "./UI/Button.js";

export default function ButtonList() {
    const list = ["All", "Music", "< 10 min", "Mixes", "Live", "Mantras", "T-Series", "Indian pop music", "Satsang", "Lessons", "series"];

    return (
        <div className="flex justify-center">
            {list.map((item, index) => (
                <Button
                    key={index}
                    className='px-3 py-1 m-3 bg-gray-200 rounded-lg'
                    children={item}
                />
            ))}
        </div>
    );
};
