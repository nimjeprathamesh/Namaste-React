import React, { useState } from "react";
import { findPrime } from "../utils/helper.js";
import Button from "./UI/Button.js";
import Input from "./UI/Input.js";

export default function Demo() {
    const [text, setText] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const prime = findPrime(123);

    function handleClick() {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <div
            className={
                "m-4 py-2 px-4 w-96 h-96 border border-black rounded-xl " +
                (isDarkTheme && "bg-gray-900")
            }
        >
            <div className="flex justify-between">
                <Input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='border border-black px-4 h-12 w-full my-2 mr-4 rounded-xl'
                />
                <Button
                    children='Toggle'
                    onClick={handleClick}
                    className='bg-gray-400 my-2 py-2 px-4 rounded-xl'
                />
            </div>
            <div>
                <h1 className={"px-2 " + (isDarkTheme && "text-white")}>
                    nth Prime: {prime}
                </h1>
            </div>
        </div>
    );
};