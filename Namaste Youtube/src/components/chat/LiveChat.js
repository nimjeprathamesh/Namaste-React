import { faAngleDown, faCircleUser, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useLiveChat from "../../hooks/useLiveChat.js";
import { SEND_ICON } from "../../utils/constants.js";
import Button from "../UI/Button";
import Input from "../UI/Input.js";
import ChatMessage from "./ChatMessage.js";

export default function LiveChat() {
    const {chatMessages, liveMessage, handleInputChange, handleSubmit} = useLiveChat();

    return (
        <div className="ml-8 border border-black rounded-2xl h-[440px]">
            <div className="border-b border-black flex justify-between">
                <Button className="my-2 py-1 px-6 text-lg">
                    Top chat <FontAwesomeIcon icon={faAngleDown} className="relative top-[0.2rem]" />
                </Button>
                <Button className="my-2 mx-2 px-4 rounded-full hover:bg-slate-200">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </Button>
            </div>
            <div className="bg-gray-200 h-[328px] overflow-y-scroll flex flex-col-reverse">
                {chatMessages.map((chat, index) => (
                    <ChatMessage key={index} name={chat.name} message={chat.message} />
                ))}
            </div>
            <form className="border-t border-black flex justify-between px-2" onSubmit={handleSubmit}>
                <FontAwesomeIcon
                    icon={faCircleUser}
                    size="1x"
                    className="p-2 mt-2 text-gray-500"
                    style={{ height: '1.5rem', width: '1.5rem' }}
                />
                <Input
                    type='text'
                    placeholder='Chat...'
                    className='bg-gray-200 py-2 px-4 my-2 w-full rounded-full border border-black'
                    value={liveMessage}
                    onChange={handleInputChange}
                />
                <Button type='submit' className="my-2 mx-2 px-3 rounded-full hover:bg-gray-300">
                    {SEND_ICON}
                </Button>
            </form>
        </div>
    );
};