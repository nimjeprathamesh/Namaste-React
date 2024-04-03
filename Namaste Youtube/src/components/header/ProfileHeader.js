import { faBell, faCircleUser, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../UI/Button.js";

export default function ProfileHeader() {
    return (
        <div className='flex justify-between col-span-1'>
            <Button className='text-xl text-gray-500 p-1 mx-2'>
                <FontAwesomeIcon icon={faVideo}/>
            </Button>
            <Button className='text-xl text-gray-500 p-1 mx-2'>
                <FontAwesomeIcon icon={faBell} />
            </Button>
            <Button className='text-2xl text-gray-500 p-1 mx-2'>
                <FontAwesomeIcon icon={faCircleUser} />
            </Button>
        </div>
    );
};