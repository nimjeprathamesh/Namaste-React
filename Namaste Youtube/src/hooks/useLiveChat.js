import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from "../slice/chatSlice";
import generateRandomName, { makeRandomMessage } from "../utils/helper.js";

export default function useLiveChat() {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20) + " 🚀",
            }));
        }, 1000);

        return () => clearInterval(i);
    }, [dispatch]);

    function handleInputChange(event) {
        setLiveMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addMessage({
            name: 'Prathamesh Nimje',
            message: liveMessage,
        }));
        setLiveMessage('');
    }

    return {chatMessages, liveMessage, handleInputChange, handleSubmit};
};